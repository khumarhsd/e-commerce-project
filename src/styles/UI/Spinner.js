import styled from 'styled-components';

export const LoaderDotsStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15% auto;
        svg {
                /* width: 3.75em; */
                transform-origin: center;
                animation: rotate 2s linear infinite;
        }
        circle {
                fill: none;
                stroke: var(--primary-100);
                stroke-width: 4;
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
                stroke-linecap: round;
                animation: dash 1.5s ease-in-out infinite;
        }
        @keyframes rotate {
                100% {
                        transform: rotate(360deg);
                }
        }
        @keyframes dash {
                0% {
                        stroke-dasharray: 1, 200;
                        stroke-dashoffset: 0;
                }
                50% {
                        stroke-dasharray: 90, 200;
                        stroke-dashoffset: -35px;
                }
                100% {
                        stroke-dashoffset: -125px;
                }
        }
`;

export const Loader = ({width}) => (
        <LoaderDotsStyled>
                <svg viewBox="25 25 50 50" width={width}> 
                        <circle cx="50" cy="50" r="20" />
                </svg>
        </LoaderDotsStyled>
);