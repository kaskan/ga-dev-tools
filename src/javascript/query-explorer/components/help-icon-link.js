// Copyright 2015 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import camelCase from 'camelcase';
import React from 'react';


const REFERENCE_URL =
    'https://developers.google.com' +
    '/analytics/devguides/reporting/core/v3/reference#';


const INFO_ICON =
    `<svg class="Icon" viewBox="0 0 16 16">
      <use xlink:href="/public/images/icons.svg#icon-info"></use>
    </svg>`;


export default class HelpIconLink extends React.Component {

  render() {
    return (
      <a
        className="FlexLine-item FormControl-helpIcon"
        href={REFERENCE_URL + camelCase(this.props.name)}
        tabIndex="-1"
        dangerouslySetInnerHTML={{__html: INFO_ICON}}></a>
    );
  }
}
