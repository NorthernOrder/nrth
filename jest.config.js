const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/main/web',
    '<rootDir>/apps/main/admin',
    '<rootDir>/apps/main/api',
    '<rootDir>/apps/discord/api',
    '<rootDir>/apps/discord/bot',
    '<rootDir>/apps/discord/web',
    '<rootDir>/apps/admin/api',
    '<rootDir>/libs/shared/passport-nrth-id',
    '<rootDir>/libs/shared/passport-internal',
    '<rootDir>/libs/shared/ui-react',
    '<rootDir>/apps/id/admin',
    '<rootDir>/apps/id/account',
    '<rootDir>/apps/id/api',
    '<rootDir>/libs/main/api/donations',
    '<rootDir>/libs/main/api/status',
    '<rootDir>/libs/id/api/templates',
    '<rootDir>/libs/nest-discord',
  ],
};
