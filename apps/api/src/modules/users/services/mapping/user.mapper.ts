import { User } from '../../entities/user.entity';

export function mapUserToResponse(user: User) {
  return {
    userId: user.userId,
    typeDocument: user.typeDocument.type,
    document: user.document,
    firstname: user.firstname,
    middlename: user.middlename,
    firstsurname: user.firstsurname,
    secondsurname: user.secondsurname,
    email: user.email,
    phone: user.phone,
    isActive: user.isActive,
    role: user.roles.name,
    companyId: user.company.companyId,
    companyNit: user.company.nit,
    company: user.company.name,
  };
}
