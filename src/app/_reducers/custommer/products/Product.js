import * as types from "../../../_constants/ActionType";
var initialState = [{
    id: 1,
    name: 'Bưởi',
    url: 'https://myphamthuanchay.com/data/upload_file/Image/hinh-anh-thanh-phan/anh-buoi-1.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'
},
{
    id: 2,
    name: 'Cam',
    url: 'https://dacsancamvinh.net/wp-content/uploads/2015/06/cong-dung-qua-cam.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'

}, {
    id: 3,
    name: 'Chuối',
    url: 'https://i.pinimg.com/736x/dd/83/0f/dd830f0bf9e8a5581a68d3119e77b914.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'

}, {
    id: 4,
    name: 'Xoài',
    url: 'https://photo.wikivui.com/19/09/qua-xoai-xanh.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'

}, {
    id: 5,
    name: 'Nhãn',
    url: 'https://suckhoedoisong.vn/Images/nguyenkhanh/2018/08/17/qua_nhan.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'

}, {
    id: 6,
    name: 'Táo',
    url: 'https://storage.googleapis.com/ifarmer-vn/80a1583a760a48f1bed9e1179ba295f1/trai-tao.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'

},
{
    id: 7,
    name: 'Nho',
    url: 'https://thatgia.com/uploads/2016/01/Phan-biet-nho-ninh-thuan-that-va-gia.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'

}, {
    id: 8,
    name: 'Măng cục',
    url: 'https://image2.baonghean.vn/w1000/Uploaded/2020/nkdkswkqoc/201606/original/images1587164_000.jpg',
    money: 500,
    description: 'Quick sample text to create the card title and make up the body of the card'

}];
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETPRODUCT:
            return state;
        default:
            return state;
    }
};
export default myReducer;