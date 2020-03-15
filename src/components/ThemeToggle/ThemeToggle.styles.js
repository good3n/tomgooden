import styled from 'styled-components'

export const Toggle = styled.div`
  display: inline-block;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  background: #eee;
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

  @media (max-width: 899px) {
    top: -3px;
  }

  &::after {
    content: '';
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: #fff;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: left 0.2s ease;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  svg {
    position: absolute;
    width: 20px;
    top: 5px;
    opacity: 0;
    transition: opacity 1s ease;

    &.light {
      right: 5px;

      circle {
        fill: #f29a55;
      }
    }

    &.dark {
      left: 5px;

      path {
        fill: #fde38e;
      }
    }
  }

  &.dark {
    background: #4e4a5d;

    &::after {
      left: 33px;
      background: #1e1f21;
    }

    svg.dark {
      opacity: 1;
    }
  }

  &.light {
    svg.light {
      opacity: 1;
    }
  }
`
