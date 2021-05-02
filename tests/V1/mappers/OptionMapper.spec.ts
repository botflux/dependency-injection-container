import {IServiceContainerFactoryOptions} from '../../../src/V1'
import {OptionMapper} from '../../../src/V1/mappers/OptionMapper'

describe('#OptionMapper', () => {
    describe('#toContainerOptions', () => {
        it('converts service container factory option to service container option', () => {
            const options: IServiceContainerFactoryOptions = {
                useReflection: true,
                allowServiceOverride: false
            }

            const optionsMapper = new OptionMapper()

            expect(optionsMapper.toContainerOptions(options)).toEqual({ allowServiceOverride: false })
        })
    })
})
