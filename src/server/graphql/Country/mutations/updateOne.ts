import { mutationField, nonNull } from 'nexus'

export const CountryUpdateOneMutation = mutationField('updateOneCountry', {
  type: nonNull('Country'),
  args: {
    where: nonNull('CountryWhereUniqueInput'),
    data: nonNull('CountryUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.country.update({
      where,
      data,
      ...select,
    })
  },
})
