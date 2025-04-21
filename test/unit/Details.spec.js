import { mount } from '@vue/test-utils'
import Details from '@/components/Details.vue'

global.navigator.clipboard = { writeText: jest.fn() }

describe('Details.vue', () => {
  let wrapper;
  const pokemon = {
    name: 'Pikachu',
    weight: 6,
    height: 0.4,
    types: [{ type: { name: 'Electric' } }]
  }
  
  beforeEach(() => {
    wrapper = mount(Details, {
      props: {
        pokemon,
        isFavorite: () => false
      }
    })
  })

  it('should call sharePokemon and copy the pokemon data to clipboard', async () => {
    const shareButton = wrapper.find('.btn-red')

    await shareButton.trigger('click')

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      `name:Pikachu, Weight: 6, Height: 0.4, Types: Electric`
    )
  })
})
