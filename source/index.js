const {
    objectToDatasource,
    registerDatasource,
    stringToDatasource
} = require("./DatasourceAdapter.js");
const TextDatasource = require("./TextDatasource.js");
const WebDAVDatasource = require("./WebDAVDatasource.js");
const OwnCloudDatasource = require("./OwnCloudDatasource.js");
const NextcloudDatasource = require("./NextcloudDatasource.js");
const DropboxDatasource = require("./DropboxDatasource.js");

/**
 * The primary module
 * @module ButtercupDatasources
 */
const module = {
    DropboxDatasource,
    NextcloudDatasource,
    OwnCloudDatasource,
    TextDatasource,
    WebDAVDatasource,
    objectToDatasource,
    registerDatasource,
    stringToDatasource
};

module.exports = module;
