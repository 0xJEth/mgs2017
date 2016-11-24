import css, { styles } from './style'

/* global it expect */

it('styles obj creates objects', () => {
  // console.log(styles)
  expect(styles.m1).toEqual({ margin: '1rem' })
  expect(styles.m)
})
it('creates a merged object from css string', () => {
  expect(css('m0 mt3 pb2')).toEqual({ margin: 0, marginTop: '3rem', paddingBottom: '2rem' })
})
