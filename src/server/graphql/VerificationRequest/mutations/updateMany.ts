import { mutationField, nonNull } from 'nexus'

export const VerificationRequestUpdateManyMutation = mutationField(
  'updateManyVerificationRequest',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'VerificationRequestWhereInput',
      data: nonNull('VerificationRequestUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.verificationRequest.updateMany(args as any)
    },
  },
)
