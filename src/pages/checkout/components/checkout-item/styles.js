import { styled } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GoTrash } from "react-icons/go";

export const InfoRow = styled.tr`
    display: flex;
    justify-content: space-between;

`

export const Data = styled.td`
    text-align: center;
    width: 10rem;
    padding: 1rem;
    margin-top: auto;
    margin-bottom: auto;
`

export const ImageContainer = styled.td`
    width: 5rem;
    padding: 1rem;
    margin-top: auto;
    margin-bottom: auto;
`

export const Image = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
`

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const MinusButton = styled(AiOutlineMinus)`
    cursor: pointer;
`

export const PlusButton = styled(AiOutlinePlus)`
    cursor: pointer;
`

export const TrashButton = styled(GoTrash)`
    cursor: pointer;
`

export const Trash = styled.td`
    width: 2rem;
    padding: 1rem;
    margin-top: auto;
    margin-bottom: auto
`