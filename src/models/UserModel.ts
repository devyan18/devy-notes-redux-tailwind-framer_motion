export default interface UserModel {
  username: string
  email: string
  sexo: 'male' | 'female'
  premium: boolean
  isActive: boolean
}
