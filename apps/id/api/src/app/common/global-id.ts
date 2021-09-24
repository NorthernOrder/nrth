import { toGlobalId as toGid, fromGlobalId as fromGid } from 'graphql-relay';

export function toGlobalId(type: string, id: number) {
  return toGid(type, id.toString());
}

export function fromGlobalId(id: string) {
  const { id: gid, type } = fromGid(id);
  const nid = parseInt(gid, 10);
  return {
    type,
    id: nid,
  };
}
