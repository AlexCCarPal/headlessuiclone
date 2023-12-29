import plugin from 'tailwindcss/plugin'

interface Options {
  /**
   * The prefix used for the variants. This defaults to `ui`.
   *
   * Usage example:
   * ```html
   *  <div class="ui-open:underline"></div>
   *  ```
   **/
  prefix?: string
}

export default plugin.withOptions<Options>(({ prefix = 'ui' } = {}) => {
  return ({ addVariant }) => {
    for (let state of ['open', 'checked', 'selected', 'active', 'disabled']) {
      // TODO: Once `:has()` is properly supported, then we can switch to this version:
      // addVariant(`${prefix}-${state}`, [
      //   `&[data-headlessui-state~="${state}"]`,
      //   `:where([data-headlessui-state~="${state}"]):not(:has([data-headlessui-state])) &`,
      // ])

      // But for now, this will do:
      addVariant(`${prefix}-${state}`, [
        `&[data-headlessuiclone-state~="${state}"]`,
        `:where([data-headlessuiclone-state~="${state}"]) &`,
      ])

      addVariant(`${prefix}-not-${state}`, [
        `&[data-headlessuiclone-state]:not([data-headlessuiclone-state~="${state}"])`,
        `:where([data-headlessuiclone-state]:not([data-headlessuiclone-state~="${state}"])) &:not([data-headlessuiclone-state])`,
      ])
    }

    addVariant(`${prefix}-focus-visible`, ':where([data-headlessuiclone-focus-visible]) &:focus')
    addVariant(
      `${prefix}-not-focus-visible`,
      '&:focus:where(:not([data-headlessuiclone-focus-visible] &))'
    )
  }
})
