export function linkProps(src, symbol) {
  return { src, icon: { className: 'fa-2x', symbol } }
}
export function facebookLink(id) {
  return linkProps(`https://www.facebook.com/${id}`, 'facebook-square')
}
export function instagramLink(id) {
  return linkProps(`https://www.instagram.com/${id}`, 'instagram')
}
export function twitterLink(id) {
  return linkProps(`https://twitter.com/${id}`, 'twitter')
}

export function socialLinks({ facebook, instagram, twitter }) {
  const links = []
  if (facebook) links.push(facebookLink(facebook))
  if (instagram) links.push(instagramLink(instagram))
  if (twitter) links.push(twitterLink(twitter))
}
