import { VaccineChart, Result } from "vaccinepages/index"
import styled from 'styled-components'
const VaccineResult=()=>{
    return(<>
    <VTable>
        <tr>
        <td><VaccineChart/></td>
        <VTd><Result/></VTd>
        </tr>
    </VTable>
    </>)
}
export default VaccineResult
const VTable = styled.table`

`
const VTd = styled.td`
    width : 200%;
    heigth : 200%
`