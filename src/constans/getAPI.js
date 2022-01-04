import callAPI from '../utils/callAPI';

export const getCity = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/city.php', 'GET', null)
}

export const getDistrict = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/district.php', 'GET', null)
}

export const getWard = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/ward.php', 'GET', null)
}

export const getKindNew = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/kind_news.php', 'GET', null)
}

export const getPropertyType = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/property_type.php', 'GET', null)
}

export const getPostType = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/post_type.php', 'GET', null)
}

export const getBuyVip = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/adv_sell.php', 'GET', null)
}

export const getRentVip = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/adv_rent.php', 'GET', null)
}

export const getAllVip = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/random_vip.php', 'GET', null)
}