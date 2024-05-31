/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

export function versionSelector2(itemVersion, versions) {
  const template =
    `<div class="version-item">
  <span>VERSION</span>：
  <div class="dropdown dropdown--hoverable dropdown--right" style="flex:1;cursor:pointer;">
    <div>${itemVersion}</div>
    <ul class="dropdown__menu">
    ` +
    versions
      .map((item) => {
        return `<li><a class="dropdown__link" href="${item.baseUrl}">${item.version}</a></li>`;
      })
      .join(' ') +
    ` </ul>
    </div>
    <div style="background: var(--openapi-explorer-caret-bg) center center;height:20px;width:20px;transform: scale(1.5) rotate(180deg);opacity:0.6;"></div>
</div>
`;
  const view = template;
  return view;
}
