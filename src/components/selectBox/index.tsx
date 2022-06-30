import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

import { FiChevronDown } from 'react-icons/fi'
import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors, FontSizes } from '../../styles/theme'

interface IconProps {
    show: string
}
interface Props {
    optionData: { value: string, name: string }[]
}

const Container = styled.div`
    position: relative;
    width: 100%;
    cursor: pointer;
    ${media.mobile(css`
        min-width: 180px;
    `)}
`
const DownIcon = styled(FiChevronDown)<IconProps>`
    position: absolute;
    top: 50%;
    right: 8px;
    font-size: 20px;
    color: ${Colors.blue[500]};
    transform: ${({ show }) => show ? 'rotateZ(180deg) translateY(50%)' : 'rotateZ(0deg) translateY(-50%)'};
`
const Selected = styled.div`
  ${FontSizes.text}
  height: 36px;
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid ${Colors.grey[200]};
  background-color: ${Colors.white};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`
const SelectList = styled.div`
    position: absolute;
    top: 36px;
    width: 100%;
    overflow: hidden;
    padding: 0;
    border-radius: 8px;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.grey[200]};
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`
const SelectItem = styled.div`
    font-size: 14px;
    padding: 6px 8px;
    transition: background-color 0.3s;
    &:hover {
        color: ${Colors.blue[600]};
        background-color: ${Colors.grey[100]}; 
    }
`

const SelectBox: NextPage<Props> = ({ optionData }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [currentOption, setCurrentOption] = useState<{ value: string, name: string }>(optionData[0])
    const [showOptions, setShowOptions] = useState<boolean>(false)

    const onOutsideClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShowOptions(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onOutsideClick)

        return () => {
            document.removeEventListener('mousedown', onOutsideClick)
        }
    })

    return (
        <Container onClick={() => setShowOptions(!showOptions)} ref={ref}>
            <DownIcon show={`${showOptions}`} />
            <Selected>{currentOption.name}</Selected>
            {showOptions && (
                <SelectList>
                    {optionData.map((data) => (
                        <SelectItem
                            key={data.value}
                            data-value={data.value}
                            onClick={() => setCurrentOption(data)}
                        >
                            {data.name}
                        </SelectItem>
                    ))}
                </SelectList>
            )}
        </Container>
    )
}
export default SelectBox