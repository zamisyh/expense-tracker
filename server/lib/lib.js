const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const joi = require('joi');
const http = require('http');
const path = require('path');
const env = require('dotenv');


module.exports = {
    express,
    colors,
    morgan,
    cors,
    joi,
    http,
    path,
    env
}