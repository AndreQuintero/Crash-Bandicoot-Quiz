import styled from 'styled-components';

const Gauge = styled.div`

    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 50%;
    z-index: 1000;
`;

Gauge.Number = styled.div`
    position: absolute;
    left: 7px;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

Gauge.Number.H2 = styled.h2`
    color: #777;
    font-weight: 700;
    font-size: 40px !important;
    transition: 0.5s;
    color: #fff;
    margin-top: 50%;
    transform: translate(0px, -30px);
`;

Gauge.Number.Span = styled.span`
    font-size: 24px;
    color: #777;
`;

Gauge.Circle = styled.svg`
    position: relative;
    width: 157px;
    height: 157px;
    z-index: 1000;
`;

Gauge.Circle.Radius = styled.circle`

    width: 100%;
    height: 100%;
    fill: none;
    stroke: rgba(255,255,255, 0.75);
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(5px,5px);
    &:nth-child(2) {
        stroke-dasharray: 480;
        stroke-dashoffset: calc(480 - (480 * ${({ percent }) => percent}) / 100);
        stroke: ${({ theme }) => theme.colors.primary};
        stroke-width: 12;
    }
`;

export default Gauge;
