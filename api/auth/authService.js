const users = require("../../model/user")
const menus = require("../../model/menu")
const submenus = require("../../model/submenu")
const forms = require("../../model/form")

//Function for geting user details with email id
exports.checkUserExistWithEmail = async (email) => {
  try {
    const userDetails = await users.findOne({username:email}).lean()
    if (userDetails) {
      // Extracting IDs from user details
      const { menulist, submenulist, formslist } = userDetails;
      // Fetching details based on IDs
      const menusDetails = await menus.find({ _id: { $in: menulist } }).lean();
      const submenusDetails = await submenus.find({ _id: { $in: submenulist } }).lean();
      const formsDetails = await forms.find({ _id: { $in: formslist } }).lean();

      // Adding details to userDetails object
      userDetails.menusDetails = menusDetails;
      userDetails.submenusDetails = submenusDetails;
      userDetails.formsDetails = formsDetails;
      return Promise.resolve(userDetails)
    } else {
      return Promise.resolve(null)
    }
  } catch (error) {
    console.log("error in checkUserExistWithEmail ", error)
    return Promise.reject(error)
  }
}

exports.getMenuList = async (data) => {
  try {
    console.log("data===", data);
    if (data && data.length > 0) {
      let finalMenuList = []
      let finalSubMenuList = []
      const promise = data.map(async (element) => {
        const selectQuery = `select id, menuname from menus where id = '${element}';`
        const menuList = await query(selectQuery)
        finalMenuList.push(...menuList)
      })
      await Promise.all(promise)
      console.log("finalMenuList===", finalMenuList);
      const promise1 = finalMenuList.map(async (menuItem) => {
        const selectMenuQuery = `select id, submenuname from submenus where id = '${menuItem.id}'`
        const submenuList = await query(selectMenuQuery)
        let obj = {
          menuName: menuItem,
          submenulist: submenuList
        }
        finalSubMenuList.push(obj)       
      })
      await Promise.all(promise1)
      const promise2 = submenuList.map(async (valueOfSubMenuList) => {
        let objOfSubMenu = {
          menuid: valueOfSubMenuList.id,
          submenuid: valueOfSubMenuList.id
        }
        const formList = await getFormListByMenuAndSubMenu(objOfSubMenu)
        console.log("formList===", formList);
      })
      await Promise.all(promise2) 

      console.log("finalSubMenuList===", finalSubMenuList);
      if (finalSubMenuList && finalSubMenuList.length > 0) {
        return Promise.resolve(finalSubMenuList)
      } else {
        return Promise.resolve(null)
      }
    } else {
      return Promise.resolve(null)
    }
  } catch (error) {
    console.log("error in getMenuList ", error)
    return Promise.reject(error)
  }
}

exports.getSubMenuList = async (data) => {
  try {
    if (data && data.length > 0) {
      let finalSubMenuList = []
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const selectQuery = `select (submenuname) from submenus where id = '${element}'`
        const subMenuList = await query(selectQuery)
        finalSubMenuList.push(...subMenuList)
      }
      if (finalSubMenuList && finalSubMenuList.length > 0) {
        return Promise.resolve(finalSubMenuList)
      } else {
        return Promise.resolve(null)
      }
    } else {
      return Promise.resolve(null)
    }
  } catch (error) {
    console.log("error in getMenuList ", error)
    return Promise.reject(error)
  }
}

//Function for geting user details with id
exports.checkUserExistWithId = async (id) => {
  try {
    const querys = `select * from users where id = '${id}'`
    const userDetails = await query(querys)
    if (userDetails && userDetails.length > 0) {
      return Promise.resolve(...userDetails)
    } else {
      return Promise.resolve(null)
    }
  } catch (error) {
    console.log("error in checkUserExistWithEmail ", error)
    return Promise.reject(error)
  }
}

async function getFormListByMenuAndSubMenu(data){
  try {
    const selectQuery = `select formlist from forms where menuid = ${data.menuid} AND submenuid = ${data.submenuid}`
    const formlist = await query(selectQuery)
    console.log("formlist====", formlist);
    if (formlist && formlist.length > 0) {
      return Promise.resolve(...formlist)
    } else {
      return Promise.resolve(null)
    }
  } catch (error) {
    console.log("error in getFormListByMenuAndSubMenu ", error)
    return Promise.reject(error)
  }
}