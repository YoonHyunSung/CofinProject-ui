import React from 'react'
import styled from 'styled-components'
import { InoculationNavi, InpectionNavi } from 'chartpages/index'

const ChartHeader = () => {
  const tabList = document.querySelectorAll('.tab_menu .list li');
  const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
  let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        // 나머지 버튼 클래스 제거
        tabList[j].classList.remove('is_on');

        // 나머지 컨텐츠 display:none 처리
        contents[j].style.display = 'none';
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add('is_on');

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';
    });
  }
    return(<>
        <div class="tab_menu">
          <ul class="list">
            <li class="is_on" display = "none">
              <a href="#tab1" class="btn">코로나 관련 현황</a>
            </li>
            <li display = "none">
              <a href="#tab2" class="btn">백신접종 관련 현황</a>
            </li>
          </ul>
          
          <div class="cont_area" >
            <div id="tab1" class="cont" >
              <InpectionNavi/>
            </div>
            <div id="tab2" class="cont" >
              <InoculationNavi/>
            </div>
          </div>
      </div>
    </>)
}
export default ChartHeader
const Tabul = styled.ul`
`
const Tabli = styled.li`
  
`
const Tabdiv = styled.div`
`
