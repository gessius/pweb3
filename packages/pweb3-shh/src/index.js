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
 * @file index.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import {Network} from 'pweb3-net';
import * as Utils from 'pweb3-utils';
import {formatters} from 'pweb3-core-helpers';
import {ProviderResolver} from 'pweb3-providers';
import MethodFactory from './factories/MethodFactory';
import SubscriptionsFactory from './factories/SubscriptionsFactory';
import ShhModule from './Shh.js';

/**
 * Returns the Shh object.
 *
 * @method Shh
 *
 * @param {Web3EthereumProvider|HttpProvider|WebsocketProvider|IpcProvider|String} provider
 * @param {Net} net
 * @param {Object} options
 *
 * @returns {Shh}
 */
export function Shh(provider, net = null, options = {}) {
    const resolvedProvider = new ProviderResolver().resolve(provider, net);

    return new ShhModule(
        resolvedProvider,
        new MethodFactory(Utils, formatters),
        new SubscriptionsFactory(Utils, formatters),
        new Network(resolvedProvider, null, options),
        options,
        null
    );
}
