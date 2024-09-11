import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, isNew }) => css`
    display: flex;
    align-items: center;

    background-color: ${isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${theme.COLORS.GRAY_300};

    border: ${isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
      border: none;
      background: none;
    }

    .button-add {
      color: ${theme.COLORS.ORANGE};
    }

    .button-delete {
      color: ${theme.COLORS.RED};
    }

    > input {
      height: 56px;
      width: 100%;

      padding: 12px;
      color: ${theme.COLORS.WHITE};
      background: transparent;

      border: none;

      &::placeholder {
        color: ${theme.COLORS.GRAY_300};
      }
    }
  `}
`;
