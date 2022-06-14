import { NextPage } from 'next'
import { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors } from '../../styles/theme'

interface Props {
    selectList: { value: string, name: string }[]
}

const Select = styled.select`
    padding: 4px 8px;
    border: 1px solid ${Colors.black[100]};
    border-radius: 8px;
    font-size: 14px;
    ${media.mobile(css`
        border: 1px solid ${Colors.black[200]};
        border-radius: 8px;
        font-size: 14px;
    `)}
`

const SelectBox: NextPage<Props> = ({ selectList }) => {
    const [selected, setSelected] = useState('')

    const handleSelect = useCallback((e: any) => {
        setSelected(e.target.value)
    }, [])

    return (
        <Select onChange={handleSelect} value={selected}>
            {selectList.map((item) => (
                <option
                    key={item.value}
                >
                    {item.name}
                </option>
            ))}
        </Select>
    )
}

export default SelectBox