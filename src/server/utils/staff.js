import db from '../models/index'
const { Staff } = db

const properCase = (str) => {
  if (str && typeof str === 'string' && str.trim().length === 1) {
    return String(str).trim().toUpperCase()
  }
  if (str && typeof str === 'string') {
    return str
      .trim()
      .split(' ')
      .map((w) => w[0] && w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(' ')
  }
  return str
}

export default class StaffUtils {
  fieldNames = [
    'Serial No',
    'firstName',
    'lastName',
    'email',
    'inviteSent',
    'testSent',
    'testStatus',
  ]

  static getRequestBody(body) {
    let dataObj = {}
    this.fieldNames.forEach((field) => {
      dataObj[field] =
        body[field]?.toLowerCase() === 'na' ? properCase(body[field]) : 'NA'
    })
    return dataObj
  }
  static getAllReqBody(body) {
    const data = []
    Array.from(body).forEach((data) => {
      let dataObj = {}
      this.fieldNames.forEach((field) => {
        dataObj[field] =
          data[field]?.toLowerCase() === 'na' ? properCase(data[field]) : 'NA'
      })
      data.push(dataObj)
    })

    return data
  }

  static async createStaff(data) {
    try {
      const newStaff = await Staff.create(data)
      return newStaff
    } catch (error) {
      throw error
    }
  }

  static async findOrCreateStaff(data) {
    try {
      const newStaff = await Staff.findOrCreate({
        where: { email: data.email },
      })
      return newStaff
    } catch (error) {
      throw error
    }
  }

  static async updateStaff(email, updates) {
    try {
      const staffToUpdate = await StaffUtils.findStaff('email', email)
      let staff

      if (staffToUpdate) {
        staff = await Staff.update(updates, {
          where: { email },
          attributes: {
            exclude: ['id'],
          },
          returning: true,
        })
        return staff
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async findStaff(key, value) {
    let staff
    try {
      staff = await Staff.findOne({
        where: {
          [key]: value,
        },
      })
      return staff
    } catch (error) {
      throw error
    }
  }

  static async findAllStaff(key, value) {
    let staff
    try {
      if (!key && !value) {
        staff = await Staff.findAll({ raw: true })
      } else {
        if (value) {
          staff = await Staff.findAll({
            where: {
              [key]: value,
            },
          })
        } else {
          if (Object.keys(key).length > 0) {
            staff = await Staff.findAll({
              where: key,
            })
          }
        }
      }
      return staff
    } catch (error) {
      throw error
    }
  }

  static async getStaffField(withoutId, body) {
    const data = {}
    let acceptedFields = this.fieldNames
    if (withoutId)
      acceptedFields = acceptedFields.filter((field) => field !== 'id')
    Object.entries(body).forEach(([key, value]) => {
      if (acceptedFields.includes(key)) {
        data[key] = value
      }
    })
    return data
  }
}
