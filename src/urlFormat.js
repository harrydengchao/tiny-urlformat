const url = {
  params: field => {  // 返回URL中的字段
    let index = window.location.href.lastIndexOf('?');
    if (index === -1) return '';
    let paramsList = window.location.href.substring(index + 1).split(/[&=]/);
    let searchIndex = paramsList.indexOf(field);
    if ( searchIndex === -1) return '';
    return paramsList[searchIndex + 1] || '';
  },
  search() {
    let searchIndex = location.href.lastIndexOf('?');
    if (searchIndex === -1) return '';
    return location.href.substring(searchIndex + 1)
  }
}

export default url
