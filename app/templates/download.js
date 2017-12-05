const html = require('choo/html');
const progress = require('./progress');
const { bytes } = require('../utils');

module.exports = function(state) {
  const transfer = state.transfer;
  const div = html`
  <div id="page-one">
  <div id="download-progress" class="fadeIn">
    <div id="dl-title" class="title">${state.translate(
      'downloadingPageProgress',
      {
        filename: state.fileInfo.name,
        size: bytes(state.fileInfo.size)
      }
    )}</div>
    <div class="description">${state.translate('downloadingPageMessage')}</div>
    ${progress(transfer.progressRatio)}
    <div class="upload">
      <div class="progress-text">${state.translate(
        transfer.msg,
        transfer.sizes
      )}</div>
    </div>
    </div>
  </div>
  `;

  return div;
};
