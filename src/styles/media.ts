import { Breakpoints } from './theme'
import { css, FlattenSimpleInterpolation } from 'styled-components'

const mobile = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (min-width: ${Breakpoints.Mobile}px) {
            ${content}
        }
    `

const tabletM = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (min-width: ${Breakpoints.TabletM}px) {
            ${content}
        }
    `

const tabletL = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (min-width: ${Breakpoints.TabletL}px) {
            ${content}
        }
    `

const desktopS = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (min-width: ${Breakpoints.DesktopS}px) {
            ${content}
        }
    `
    
const desktopM = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (min-width: ${Breakpoints.DesktopM}px) {
            ${content}
        }
    `

const desktopL = (content: FlattenSimpleInterpolation) =>
    css`
        @media only screen and (min-width: ${Breakpoints.DesktopL}px) {
            ${content}
        }
    `

const media = {
    mobile,
    tabletM,
    tabletL,
    desktopS,
    desktopM,
    desktopL
}

export default media