import { queryField, list } from 'nexus'

export const VerificationRequestFindFirstQuery = queryField(
  'findFirstVerificationRequest',
  {
    type: 'VerificationRequest',
    args: {
      where: 'VerificationRequestWhereInput',
      orderBy: list('VerificationRequestOrderByInput'),
      cursor: 'VerificationRequestWhereUniqueInput',
      distinct: 'VerificationRequestScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.verificationRequest.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
