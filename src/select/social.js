export function linkProps(title, href, symbol) {
  return { href, icon: { className: 'fa-2x', symbol }, title }
}
export function facebookLink(id) {
  return linkProps('Facebook', `https://www.facebook.com/${id}`, 'facebook-square')
}
export function instagramLink(id) {
  return linkProps('instagram', `https://www.instagram.com/${id}`, 'instagram')
}
export function twitterLink(id) {
  return linkProps('Twitter', `https://twitter.com/${id}`, 'twitter')
}

export function socialLinks({ facebook, instagram, twitter }) {
  const links = []
  if (facebook) links.push(facebookLink(facebook))
  if (instagram) links.push(instagramLink(instagram))
  if (twitter) links.push(twitterLink(twitter))
  return links
}
