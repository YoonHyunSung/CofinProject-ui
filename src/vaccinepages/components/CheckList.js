import React from 'react'
import styled from 'styled-components'

const CheckList=()=>{
    return(<Vsection>
        <Vdiv>
            <Vp>
                <thead><strong>질환 관련(본인과 관련된 질환에 대하여 체크해주세요.)</strong></thead>
                
                <VTable>
                    <tr>
                    <th>구분</th>
                    <th>있음</th>
                    <th>없음</th>
                    </tr>

                    <tr>
                    <th>암</th>
                    <VTd><input type="radio" name ="cancar"/></VTd>
                    <VTd><input type="radio" name ="cancar"/></VTd>
                    </tr>

                    <tr>
                    <th>당뇨병</th>
                    <VTd><input type="radio"/></VTd>
                    <VTd><input type="radio"/></VTd>
                    </tr>

                    <tr>
                    <th>치매</th>
                    <VTd><input type="radio"/></VTd>
                    <VTd><input type="radio"/></VTd>
                    </tr>

                    
                </VTable>

            </Vp>
        </Vdiv>
    </Vsection>)
}
export default CheckList
const VTable = styled.table`
`
const VTd = styled.td`
`
const Vdiv = styled.div`
    width: 900px;
    height: 250px;
    margin: 0 0 0 39px;
    padding-top: 35px;`
const Vp = styled.p`
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const Vsection = styled.section`
    width: 1000px;
    height: 325px;
`