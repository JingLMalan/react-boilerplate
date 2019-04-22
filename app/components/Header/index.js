import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Button from '../Button';
import './title.scss';
import JingMalan from './Jingmalan';

class Header extends React.Component {

  render() {
    return (
      <div>
        <A href="https://www.reactboilerplate.com/">
          <ul>
            <li>
             我最酷
	</li>
            <li>
             魔镜，墨镜，我是不是这个世界上最美的人
	</li>
            <li>
             天底下的男人都是大猪蹄子
	</li>
            <li>
             不行啦，我不行啦
	</li>
            <li>
             快来，宝贝，我还是很爱你的哦
	</li>
            <li>
             莎士比亚说，你们这些罪人
	</li>
            <li>
             我们将在2020年实现全面祥康社会
	</li>
            <li>
             富强，民主
	</li>
            <li>
              文明，和谐
	</li>
            <li>
             诚信，友善
	</li>
            <li>
             健康，求服
	</li>
            <li>
             站起来，兄弟们
	</li>
            <li>
             这里有很多汽车哦
	</li>
            <li>
             🚗🚗🚗🚗🚗🚗
	</li>
            <li>
            到底可以不可以让我说出我爱你啊
	</li>
            <li>
            兄弟们
	</li>
          </ul>
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
