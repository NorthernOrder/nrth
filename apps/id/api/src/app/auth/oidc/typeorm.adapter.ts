import { Adapter, AdapterPayload } from 'oidc-provider';
import { getRepository, Repository } from 'typeorm';
import { AccessToken } from './entities/access-token.entity';
import { AuthorizationCode } from './entities/authorization-code.entity';
import { BaseOIDCEntity } from './entities/base-entity';
import { ClientCredentials } from './entities/client-credentials.entity';
import { Client } from './entities/client.entity';
import { DeviceCode } from './entities/device-code.entity';
import { Grant } from './entities/grant.entity';
import { BaseGrantableEntity } from './entities/grantable-entity';
import { InitialAccessToken } from './entities/initial-access-token.entity';
import { Interaction } from './entities/interaction.entity';
import { PushedAuthorizationRequest } from './entities/pushed-authorization-request.entity';
import { RefreshToken } from './entities/refresh-token.entity';
import { RegistrationAccessToken } from './entities/registration-access-token.entity';
import { ReplayDetection } from './entities/replay-detection.entity';
import { Session } from './entities/session.entity';

const models = new Map<string, typeof BaseOIDCEntity>([
  ['Session', Session],
  ['AccessToken', AccessToken],
  ['AuthorizationCode', AuthorizationCode],
  ['RefreshToken', RefreshToken],
  ['DeviceCode', DeviceCode],
  ['ClientCredentials', ClientCredentials],
  ['Client', Client],
  ['InitialAccessToken', InitialAccessToken],
  ['RegistrationAccessToken', RegistrationAccessToken],
  ['Interaction', Interaction],
  ['ReplayDetection', ReplayDetection],
  ['PushedAuthorizationRequest', PushedAuthorizationRequest],
  ['Grant', Grant],
]);

export class TypeOrmAdapter implements Adapter {
  private model: Repository<BaseOIDCEntity>;

  constructor(private name: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.model = getRepository(models.get(this.name)!);
  }

  async upsert(
    id: string,
    data: AdapterPayload,
    expiresIn: number
  ): Promise<void> {
    await this.model.save({
      id,
      data,
      ...(data.grantId ? { grantId: data.grantId } : undefined),
      ...(data.userCode ? { userCode: data.userCode } : undefined),
      ...(data.uid ? { uid: data.uid } : undefined),
      ...(expiresIn
        ? { expiresAt: new Date(Date.now() + expiresIn * 1000) }
        : undefined),
    });
  }

  async find(id: string): Promise<AdapterPayload | undefined> {
    const found = await this.model.findOne(id);
    if (!found) return undefined;
    return {
      ...found.data,
      ...(found.consumedAt ? { consumed: true } : undefined),
    };
  }

  async findByUserCode(userCode: string) {
    const found = await (this.model as Repository<DeviceCode>).findOne({
      where: { userCode },
    });
    if (!found) return undefined;
    return {
      ...found.data,
      ...(found.consumedAt ? { consumed: true } : undefined),
    };
  }

  async findByUid(uid: string) {
    const found = await this.model.findOne({ where: { uid } });
    if (!found) return undefined;
    return {
      ...found.data,
      ...(found.consumedAt ? { consumed: true } : undefined),
    };
  }

  async destroy(id: string) {
    await this.model.softDelete(id);
  }

  async consume(id: string) {
    await this.model.update(id, { consumedAt: new Date() });
  }

  async revokeByGrantId(grantId: string) {
    await (this.model as Repository<BaseGrantableEntity>).softDelete({
      grantId,
    });
  }

  static async connect() {
    return Promise.resolve(true);
  }
}
