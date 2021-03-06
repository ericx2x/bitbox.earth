import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Script extends Component {
  componentDidMount() {
    document.title = "Script - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Script">
        <h2 id='Script' className="content-head is-center"><i className="fas fa-code" /> Script</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/Script">Script</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='opcodes'><code>opcodes</code></h3>
            <p>
            Script OP Codes
            </p>
            <h4>Result</h4>
            <p>
           opcodes <code>Object</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // list all op codes
  BITBOX.Script.opcodes;
  // { OP_FALSE: 0,
  //   OP_0: 0,
  //   OP_PUSHDATA1: 76,
  //   OP_PUSHDATA2: 77,
  //   OP_PUSHDATA4: 78,
  //   OP_1NEGATE: 79,
  //   OP_RESERVED: 80,
  //   OP_TRUE: 81,
  //   OP_1: 81,
  //   OP_2: 82,
  //   OP_3: 83,
  //   OP_4: 84,
  //   ...
  // }

  // get the op code for a word
  BITBOX.Script.opcodes.OP_SPLIT
  // 127
  BITBOX.Script.opcodes.OP_NUM2BIN
  // 128
  BITBOX.Script.opcodes.OP_BIN2NUM
  // 129
            `}</SyntaxHighlighter>

            <h3 id='encode'><code>encode</code></h3>
            <p>
            Encode a Script buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          scriptChunks <code>Array</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // encode P2PKH scriptSig to buffer
  let scriptSig = [
    Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
    Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
  ]
  BITBOX.Script.encode(scriptSig);
  // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

  // encode P2PKH scriptPubKey to buffer
  let scriptPubKey = [
    118,
    169,
    Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
    136,
    172
  ];
  BITBOX.Script.encode(scriptPubKey);
  // <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>
            `}</SyntaxHighlighter>

            <h3 id='decode'><code>decode</code></h3>
            <p>
            Decode a Script buffer.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          buffer <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          decodedScript <code>Array</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // decode P2PKH scriptSig buffer
  let scriptSigBuffer = Buffer.from("483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
  BITBOX.Script.decode(scriptSigBuffer);
  // [
  //   <Buffer 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 2b ... >,
  //   <Buffer 02 fb 72 1b 92 02 5e 77 5b 1b 84 77 4e 65 d5 68 d2 46 45 cb 63 32 75 f5 c2 6f 5c 31 01 b2 14 a8 fb>
  // ]

  // decode P2PKH scriptPubKey buffer
  let scriptPubKeyBuffer = Buffer.from("76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac", 'hex');
  BITBOX.Script.decode(scriptPubKeyBuffer);
  // [ 118,
  // 169,
  // <Buffer 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd>,
  // 136,
  // 172 ]
            `}</SyntaxHighlighter>

            <h3 id='toASM'><code>toASM</code></h3>
            <p>
            Script buffer to ASM.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          buffer <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          asm <code>String</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // P2PKH scriptSig
  let scriptSigBuffer = Buffer.from('483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex');
  BITBOX.Script.toASM(scriptSigBuffer);
  // 3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb

  // P2PKH scriptPubKey
  let scriptBuffer = Buffer.from("76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac", 'hex');
  BITBOX.Script.toASM(scriptBuffer);
  // OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG
            `}</SyntaxHighlighter>

            <h3 id='fromASM'><code>fromASM</code></h3>
            <p>
            Script ASM to buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          asm <code>String</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // P2PKH scriptSig
  let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
  BITBOX.Script.fromASM(scriptSigASM);
  // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

  // P2PKH scriptPubKey
  let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
  BITBOX.Script.fromASM(scriptPubKeyASM);
  // <Buffer 76 a9 14 be e4 18 2d 9f bc 89 31 a7 28 41 0a 0c d3 e0 f3 40 f2 99 5a 88 ac>
            `}</SyntaxHighlighter>

            <h3 id='encodeNullDataOutput'><code>encodeNullDataOutput</code></h3>
            <p>
            nulldata output template: <code>OP_RETURN `data`</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          data <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let data = "BCHForEveryone";
  let buf = BITBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
  // <Buffer 6a 0e 42 43 48 46 6f 72 45 76 65 72 79 6f 6e 65>
  BITBOX.Script.toASM(buf);
  // OP_RETURN 424348466f7245766572796f6e65

  let data = "Satoshi Nakamoto";
  let buf = BITBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
  // <Buffer 6a 10 53 61 74 6f 73 68 69 20 4e 61 6b 61 6d 6f 74 6f>
  BITBOX.Script.toASM(buf);
  // OP_RETURN 5361746f736869204e616b616d6f746
            `}</SyntaxHighlighter>

            <h3 id='decodeNullDataOutput'><code>decodeNullDataOutput</code></h3>
            <p>
            decode nulldata output
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '6a0e424348466f7245766572796f6e65';
  BITBOX.Script.nullData.output.decode(Buffer.from(hex, 'hex')).toString('ascii');
  // BCHForEveryone

  let hex = '6a105361746f736869204e616b616d6f746f';
  BITBOX.Script.nullData.output.decode(Buffer.from(hex, 'hex')).toString('ascii');
  // Satoshi Nakamoto
            `}</SyntaxHighlighter>

            <h3 id='checkNullDataOutput'><code>checkNullDataOutput</code></h3>
            <p>
            check nulldata output format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let data = "BCHForEveryone";
  let buf = BITBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
  BITBOX.Script.nullData.output.check(buf);
  // true

  let data = "Satoshi Nakamoto";
  let buf = BITBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
  BITBOX.Script.nullData.output.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2PKInput'><code>encodeP2PKInput</code></h3>
            <p>
            p2pk input template: <code>`signature`</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          signature <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
  let buf = BITBOX.Script.pubKey.input.encode(Buffer.from(signature, 'hex'));
  // <Buffer 47 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 ... >
  BITBOX.Script.toASM(buf);
  // 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801
            `}</SyntaxHighlighter>

            <h3 id='decodeP2PKInput'><code>decodeP2PKInput</code></h3>
            <p>
            decode p2pk input
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '47304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
  BITBOX.Script.pubKey.input.decode(Buffer.from(hex, 'hex'));
  // <Buffer 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 d3 ... >
            `}</SyntaxHighlighter>

            <h3 id='checkP2PKInput'><code>checkP2PKInput</code></h3>
            <p>
            check p2pk input format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
  let input = BITBOX.Script.pubKey.input.encode(Buffer.from(signature, 'hex'));
  BITBOX.Script.pubKey.input.check(input);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2PKOutput'><code>encodeP2PKOutput</code></h3>
            <p>
            p2pk output template: <code>`pubKey` OP_CHECKSIG</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          pubKey <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let pubKey = '02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b';
  let buf = BITBOX.Script.pubKey.output.encode(Buffer.from(pubKey, 'hex'));
  // <Buffer 21 02 d3 05 77 2e 08 73 fb a6 c1 c7 ff 35 3c e3 74 23 33 16 eb 58 20 ac d7 ff 3d 7d 9b 82 d5 14 12 6b ac>
  BITBOX.Script.toASM(buf)
  // 02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b OP_CHECKSIG
            `}</SyntaxHighlighter>

            <h3 id='decodeP2PKOutput'><code>decodeP2PKOutput</code></h3>
            <p>
            decode p2pk output
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          pubKey <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '2102d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126bac';
  BITBOX.Script.pubKey.output.decode(Buffer.from(hex, 'hex'));
  // <Buffer 02 d3 05 77 2e 08 73 fb a6 c1 c7 ff 35 3c e3 74 23 33 16 eb 58 20 ac d7 ff 3d 7d 9b 82 d5 14 12 6b>
            `}</SyntaxHighlighter>

            <h3 id='checkP2PKOutput'><code>checkP2PKOutput</code></h3>
            <p>
            check P2PK output format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // check p2pk output
  let pubKey = '02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b';
  let buf = BITBOX.Script.pubKey.output.encode(Buffer.from(pubKey, 'hex'));
  BITBOX.Script.pubKey.output.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2PKHInput'><code>encodeP2PKHInput</code></h3>
            <p>
            p2pkh input template: <code>`signature` `pubKey`</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          signature <code>Buffer</code>
              </li>
              <li>
          pubKey <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
  let pubKey = '02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
  let buf = BITBOX.Script.pubKeyHash.input.encode(Buffer.from(signature, 'hex'), Buffer.from(pubKey, 'hex'));
  // <Buffer 47 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 ... >
  BITBOX.Script.toASM(buf);
  // 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15
            `}</SyntaxHighlighter>

            <h3 id='decodeP2PKHInput'><code>decodeP2PKHInput</code></h3>
            <p>
            decode p2pkh input
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          signature <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '47304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca28012102d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
  BITBOX.Script.pubKeyHash.input.decode(Buffer.from(hex, 'hex'));
  // { signature: <Buffer 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 d3 ... >,
  // pubKey: <Buffer 02 d9 bb 8d a1 de 26 d3 90 b6 f3 dc b4 e5 89 85 77 30 53 6b 64 69 95 fa 94 8a 83 19 ed e2 ca 1c 15> }
            `}</SyntaxHighlighter>

            <h3 id='checkP2PKHInput'><code>checkP2PKHInput</code></h3>
            <p>
            check P2PKH input format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // check p2pkh input
  let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
  let pubKey = '02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
  let buf = BITBOX.Script.pubKeyHash.input.encode(Buffer.from(signature, 'hex'), Buffer.from(pubKey, 'hex'));
  BITBOX.Script.pubKeyHash.input.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2PKHOutput'><code>encodeP2PKHOutput</code></h3>
            <p>
            p2pkh output template: <code>OP_DUP OP_HASH160 `pubKeyHash` OP_EQUALVERIFY OP_CHECKSIG</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          signature <code>Buffer</code>
              </li>
              <li>
          pubKey <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let node = BITBOX.HDNode.fromXPriv('xprv9xoxVbZ7L8jmvKx7e1hgd7muo8H35ysTx1LCKFey5nVHUkHSPBxpzBzt2HVK16hu4m6oN5vfaCWSZQvqtDhfJTCY3t9ocp7H7zcTZ2fVRwL');
  let identifier = BITBOX.HDNode.toIdentifier(node);
  let buf = BITBOX.Script.pubKeyHash.output.encode(identifier);
  // <Buffer 76 a9 14 6e e7 de d4 f9 d0 de b6 f4 a6 3d 68 df 5c cc 4e 41 ad 89 67 88 ac>
  BITBOX.Script.toASM(buf)
  // OP_DUP OP_HASH160 6ee7ded4f9d0deb6f4a63d68df5ccc4e41ad8967 OP_EQUALVERIFY OP_CHECKSIG
            `}</SyntaxHighlighter>

            <h3 id='decodeP2PKHOutput'><code>decodeP2PKHOutput</code></h3>
            <p>
            decode p2pkh output
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '76a9146ee7ded4f9d0deb6f4a63d68df5ccc4e41ad896788ac';
  BITBOX.Script.pubKeyHash.output.decode(Buffer.from(hex, 'hex'));
  // <Buffer 6e e7 de d4 f9 d0 de b6 f4 a6 3d 68 df 5c cc 4e 41 ad 89 67>
            `}</SyntaxHighlighter>

            <h3 id='checkP2PKHOutput'><code>checkP2PKHOutput</code></h3>
            <p>
            check P2PKH output format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // check p2pkh output
  let node = BITBOX.HDNode.fromXPriv('xprv9xoxVbZ7L8jmvKx7e1hgd7muo8H35ysTx1LCKFey5nVHUkHSPBxpzBzt2HVK16hu4m6oN5vfaCWSZQvqtDhfJTCY3t9ocp7H7zcTZ2fVRwL');
  let identifier = BITBOX.HDNode.toIdentifier(node);
  let buf = BITBOX.Script.pubKeyHash.output.encode(identifier);
  BITBOX.Script.pubKeyHash.output.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2MSInput'><code>encodeP2MSInput</code></h3>
            <p>
            p2ms Input template: <code>OP_0 [signatures ...]</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          signatures <code>Array</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let signatures = [
    "304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801",
    "3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501"
  ];
  let sigs = signatures.map((signature) => {
    return signature ? Buffer.from(signature, 'hex') : BITBOX.Script.opcodes.OP_0
  })
  let buf = BITBOX.Script.multisig.input.encode(sigs);
  // <Buffer 00 47 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 ... >
  BITBOX.Script.toASM(buf);
  // OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d14050
            `}</SyntaxHighlighter>

            <h3 id='decodeP2MSInput'><code>decodeP2MSInput</code></h3>
            <p>
            decode p2ms input
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '0047304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801483045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501';
  BITBOX.Script.multisig.input.decode(Buffer.from(hex, 'hex'));
  // [ <Buffer 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 50 d3 ... >,
  // <Buffer 30 45 02 21 00 ef 25 3c 1f aa 39 e6 51 15 87 25 19 e5 f0 a3 3b be cf 43 0c 0f 35 cf 56 2b ea bb ad 4d a2 4d 8d 02 20 17 42 be 8e e4 98 12 a7 3a de a3 ... > ]
            `}</SyntaxHighlighter>

            <h3 id='checkP2MSInput'><code>checkP2MSInput</code></h3>
            <p>
            check P2MS input format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let signatures = [
    "304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801",
    "3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501"
  ];
  let sigs = signatures.map((signature) => {
    return signature ? Buffer.from(signature, 'hex') : BITBOX.Script.opcodes.OP_0
  })
  let buf = BITBOX.Script.multisig.input.encode(sigs);
  BITBOX.Script.multisig.input.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2MSOutput'><code>encodeP2MSOutput</code></h3>
            <p>
            p2ms Output template: <code>m [pubKeys ...] n OP_CHECKMULTISIG</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          m <code>Number</code>
              </li>
              <li>
          pubKeys <code>Array</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let arr = [
    "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1",
    "0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a"
  ];
  let pubKeys = arr.map((p) => { return Buffer.from(p, 'hex') })
  let m = pubKeys.length
  let buf = BITBOX.Script.multisig.output.encode(m, pubKeys);
  // <Buffer 52 21 02 35 9c 6e 3f 04 ce fb f0 89 cf 1d 66 70 dc 47 c3 fb 4d f6 8e 2b ad 1f a5 a3 69 f9 ce 4b 42 bb d1 21 03 95 a9 d8 4d 47 d5 24 54 8f 79 f4 35 75 ... >
  BITBOX.Script.toASM(buf);
  // OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG
            `}</SyntaxHighlighter>

            <h3 id='decodeP2MSOutput'><code>decodeP2MSOutput</code></h3>
            <p>
            decode p2ms output
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae';
  BITBOX.Script.multisig.output.decode(Buffer.from(hex, 'hex'));
  // { m: 2,
  // pubKeys:
  //  [ <Buffer 02 35 9c 6e 3f 04 ce fb f0 89 cf 1d 66 70 dc 47 c3 fb 4d f6 8e 2b ad 1f a5 a3 69 f9 ce 4b 42 bb d1>,
  //    <Buffer 03 95 a9 d8 4d 47 d5 24 54 8f 79 f4 35 75 8c 01 fa ec 5d a2 b7 e5 51 d3 b8 c9 95 b7 e0 63 26 ae 4a> ] }
            `}</SyntaxHighlighter>

            <h3 id='checkP2MSOutput'><code>checkP2MSOutput</code></h3>
            <p>
            check P2MS output format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let arr = [
    "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1",
    "0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a"
  ];
  let pubKeys = arr.map((p) => { return Buffer.from(p, 'hex') })
  let m = pubKeys.length
  let buf = BITBOX.Script.multisig.output.encode(m, pubKeys);
  BITBOX.Script.multisig.output.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2SHInput'><code>encodeP2SHInput</code></h3>
            <p>
            p2sh Input template: <code>`scriptSig` `serialized scriptPubKey script`</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          redeemScriptSig <code>Buffer</code>
              </li>
              <li>
          redeemScript <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let redeemScriptSig = BITBOX.Script.fromASM("OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501");
  let redeemScript = BITBOX.Script.fromASM("OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG");
  let buf = BITBOX.Script.scriptHash.input.encode(redeemScriptSig, redeemScript);
  // <Buffer 52 21 02 35 9c 6e 3f 04 ce fb f0 89 cf 1d 66 70 dc 47 c3 fb 4d f6 8e 2b ad 1f a5 a3 69 f9 ce 4b 42 bb d1 21 03 95 a9 d8 4d 47 d5 24 54 8f 79 f4 35 75 ... >
  BITBOX.Script.toASM(buf)
  // OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae
            `}</SyntaxHighlighter>

            <h3 id='decodeP2SHInput'><code>decodeP2SHInput</code></h3>
            <p>
            decode p2sh input
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = '0047304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801483045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d14050147522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae';
  BITBOX.Script.scriptHash.input.decode(Buffer.from(hex, 'hex'));
  // { redeemScript: <Buffer 52 21 02 35 9c 6e 3f 04 ce fb f0 89 cf 1d 66 70 dc 47 c3 fb 4d f6 8e 2b ad 1f a5 a3 69 f9 ce 4b 42 bb d1 21 03 95 a9 d8 4d 47 d5 24 54 8f 79 f4 35 75 ... >,
  // redeemScriptSig: <Buffer 00 47 30 44 02 20 75 15 cf 14 7d 20 1f 41 10 92 e6 be 5a 64 a6 00 6f 93 08 fa d7 b2 a8 fd aa b2 2c d8 6c e7 64 c2 02 20 09 74 b8 ac a7 bf 51 db f5 41 ... > }
            `}</SyntaxHighlighter>

            <h3 id='checkP2SHInput'><code>checkP2SHInput</code></h3>
            <p>
            check P2SH input format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let redeemScriptSig = BITBOX.Script.fromASM("OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501");
  let redeemScript = BITBOX.Script.fromASM("OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG");
  let buf = BITBOX.Script.scriptHash.input.encode(redeemScriptSig, redeemScript);
  BITBOX.Script.scriptHash.input.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='encodeP2SHOutput'><code>encodeP2SHOutput</code></h3>
            <p>
            p2sh Output template: <code>OP_HASH160 `scriptHash` OP_EQUAL</code>
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          scriptHash <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let redeemScript = BITBOX.Script.fromASM("OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG");
  let scriptHash = BITBOX.Crypto.hash160(redeemScript);
  let buf = BITBOX.Script.scriptHash.output.encode(scriptHash);
  // <Buffer a9 14 1b 61 eb ed 0c 2a 16 c6 99 a9 9c 3d 5e f4 d0 8d e7 fb 1c b8 87>
  BITBOX.Script.toASM(buf)
  // OP_HASH160 1b61ebed0c2a16c699a99c3d5ef4d08de7fb1cb8 OP_EQUAL
            `}</SyntaxHighlighter>

            <h3 id='decodeP2SHOutput'><code>decodeP2SHOutput</code></h3>
            <p>
            decode p2sh output
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           buffer <code>Buffer</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let hex = 'a9141b61ebed0c2a16c699a99c3d5ef4d08de7fb1cb887';
  BITBOX.Script.scriptHash.output.decode(Buffer.from(hex, 'hex'));
  // <Buffer 1b 61 eb ed 0c 2a 16 c6 99 a9 9c 3d 5e f4 d0 8d e7 fb 1c b8>
            `}</SyntaxHighlighter>

            <h3 id='checkP2SHOutput'><code>checkP2SHOutput</code></h3>
            <p>
            check P2SH output format
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
           valid <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let redeemScript = BITBOX.Script.fromASM("OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG");
  let scriptHash = BITBOX.Crypto.hash160(redeemScript);
  let buf = BITBOX.Script.scriptHash.output.encode(scriptHash);
  BITBOX.Script.scriptHash.output.check(buf);
  // true
            `}</SyntaxHighlighter>

            <h3 id='classifyInput'><code>classifyInput</code></h3>
            <p>
            Classify transaction input
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          input <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          type <code>String</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let pubkeyInput = "3045022100ba2c3b717e023966cb16df65ca83f77029e2a5b80c47c47b6956474ac9ff281302201d48ee3292439e284a6654a0e79ac2b8f7fff5c6b0d715260aa296501a239c6441";
  BITBOX.Script.classifyInput(BITBOX.Script.fromASM(pubkeyInput));
  // pubkey

  let pubkeyhashInput = "30440220280d4a9954c5afe24089bdd545466bd7a8caad8b295e30de9d3cb5e56fccf64e022036663b2c53b5fac674b4b935b53e2a4ea88dfc71c9b879870976d82887542ab441 02969479fa9bea3082697dce683ac05b13ae63016b41d5ca1a450ad40f6c543751";
  BITBOX.Script.classifyInput(BITBOX.Script.fromASM(pubkeyhashInput));
  // pubkeyhash

  let multisigInput = "OP_0 3045022100fe324541215798b2df68cbd44039615e23c506d4ec1a05572064392a98196b82022068c849fa6699206da2fc6d7848efc1d3804a5816d6293615fe34c1a7f34e1c2f01 3044022001ab168e80b863fdec694350b587339bb72a37108ac3c989849251444d13ebba02201811272023e3c1038478eb972a82d3ad431bfc2408e88e4da990f1a7ecbb263901 3045022100aaeb7204c17eee2f2c4ff1c9f8b39b79e75e7fbf33e92cc67ac51be8f15b75f90220659eee314a4943a6384d2b154fa5821ef7a084814d7ee2c6f9f7f0ffb53be34b01";
  BITBOX.Script.classifyInput(BITBOX.Script.fromASM(multisigInput));
  // multisig

  let scripthashInput = "OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae";
  BITBOX.Script.classifyInput(BITBOX.Script.fromASM(scripthashInput));
  // scripthash
            `}</SyntaxHighlighter>

            <h3 id='classifyOutput'><code>classifyOutput</code></h3>
            <p>
            Classify transaction output
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          output <code>Buffer</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          type <code>String</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  let nullDataOutput = "OP_RETURN 424348466f7245766572796f6e65";
  BITBOX.Script.classifyOutput(BITBOX.Script.fromASM(nullDataOutput));
  // nulldata

  let pubkeyOutput = "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 OP_CHECKSIG";
  BITBOX.Script.classifyOutput(BITBOX.Script.fromASM(pubkeyOutput));
  // pubkey

  let pubkeyhashOutput = "OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG";
  BITBOX.Script.classifyOutput(BITBOX.Script.fromASM(pubkeyhashOutput));
  // pubkeyhash

  let multisigOutput = "OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG";
  BITBOX.Script.classifyOutput(BITBOX.Script.fromASM(multisigOutput));
  // multisig

  let scripthashOutput = "OP_HASH160 722ff0bc2c3f47b35c20df646c395594da24e90e OP_EQUAL";
  BITBOX.Script.classifyOutput(BITBOX.Script.fromASM(scripthashOutput));
  // scripthash
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Script;
