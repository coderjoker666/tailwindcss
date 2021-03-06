import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('divideOpacity'), (value, modifier) => {
        return [
          `.${e(`divide-opacity-${modifier}`)} > :not(template) ~ :not(template)`,
          {
            '--divide-opacity': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('divideOpacity'))
  }
}
