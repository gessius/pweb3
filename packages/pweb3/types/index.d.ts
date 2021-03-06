/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>, Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import {AbstractWeb3Module, Web3ModuleOptions} from 'pweb3-core';
import {Utils} from 'pweb3-utils';
import * as net from 'net';
import {provider} from 'pweb3-providers';
import {Eth} from 'pweb3-eth';
import {Network} from 'pweb3-net';
import {Shh} from 'pweb3-shh';
import {Tdm} from 'pweb3-tdm';
import {Chain} from 'pweb3-chain';
import {Del} from 'pweb3-del';
import {Pi} from 'pweb3-pi';
import {Personal} from 'pweb3-eth-personal';

export default class Web3 extends AbstractWeb3Module {
    constructor(
        provider: provider,
        net?: net.Socket,
        options?: Web3ModuleOptions
    );

    static modules: Modules;
    static readonly givenProvider: any;

    utils: Utils;
    eth: Eth;
    shh: Shh;
    tdm: Tdm;
    chain: Chain;
    del: Del;
    pi: Pi;
    version: string;
}

export interface Modules {
    Eth: new (provider: provider, net: net.Socket) => Eth;
    Net: new (provider: provider, net: net.Socket) => Network;
    Personal: new (provider: provider, net: net.Socket) => Personal;
    Shh: new (provider: provider, net: net.Socket) => Shh;
    Tdm: new (provider: provider, net: net.Socket) => Tdm;
    Chain: new (provider: provider, net: net.Socket) => Chain;
    del: new (provider: provider, net: net.Socket) => Del;
    pi: new (provider: provider, net: net.Socket) => Pi;

}
