import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class Crypto extends Component {
  componentDidMount() {
    document.title = "Crypto - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="Crypto">
        <h2 id='crypto' className="content-head is-center"><i className="fas fa-link" /> Crypto</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/crypto">Crypto</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='sha256'><code>sha256</code></h3>
            <p>
              Utility for creating sha256 hash digests of data
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
                buffer <code>Buffer</code>:          data to be hashed
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            buffer <code>Buffer</code>:     sha256 hash of data
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // buffer from hex
  let buffer = Buffer.from('0101010101010101', 'hex')
  BITBOX.Crypto.sha256(buffer)
  // <Buffer 04 ab c8 82 1a 06 e5 a3 09 37 96 7d 11 ad 10 22 1c b5 ac 3b 52 73 e4 34 f1 28 4e e8 71 29 a0 61>

  // buffer from hex
  let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
  BITBOX.Crypto.sha256(buffer)
  // <Buffer 75 61 8d 82 d1 f6 25 1f 2e f1 f4 2f 5f 0d 50 40 33 09 48 a7 07 ff 6d 69 72 0d bd cb 00 b4 8a ab>

  // buffer from hex
  let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
  BITBOX.Crypto.sha256(buffer)
  // <Buffer 97 8c 09 dd 46 09 1d 19 22 fa 01 e9 f4 a9 75 b9 1a 37 1f 26 ba 83 99 de 27 d5 38 01 15 21 21 de>
            `}</SyntaxHighlighter>

            <h3 id='ripemd160'><code>ripemd160</code></h3>
            <p>
  Utility for creating ripemd160 hash digests of data
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  buffer  <code>Buffer</code>:          data to be hashed
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            buffer <code>Buffer</code>:     ripemd160 hash of data
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // buffer from hex
  let buffer = Buffer.from('0101010101010101', 'hex')
  BITBOX.Crypto.ripemd160(buffer)
  // <Buffer 58 25 70 1b 4b 97 67 fd 35 06 3b 28 6d ca 35 82 85 3e 06 30>

  // buffer from hex
  let buffer = Buffer.from('75618d82d1f6251f2ef1f42f5f0d5040330948a707ff6d69720dbdcb00b48aab', 'hex')
  BITBOX.Crypto.ripemd160(buffer)
  // <Buffer 88 74 ef 88 8a 9b cb d8 3b 87 d0 6f f7 bc 21 3c 51 49 73 62>

  // buffer from hex
  let buffer = Buffer.from('978c09dd46091d1922fa01e9f4a975b91a371f26ba8399de27d53801152121de', 'hex')
  BITBOX.Crypto.ripemd160(buffer)
  // <Buffer 5f 95 6a 88 86 30 51 ea 52 15 d8 97 0c ed 8e 21 8e b6 15 cf>
            `}</SyntaxHighlighter>

            <h3 id='hash256'><code>hash256</code></h3>
            <p>
  Utility for creating double sha256 hash digests of data
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  buffer  <code>Buffer</code>:          data to be hashed
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            buffer <code>Buffer</code>:     double sha256 hash of data
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // buffer from hex
  let buffer = Buffer.from('0101010101010101', 'hex')
  BITBOX.Crypto.hash256(buffer)
  // <Buffer 72 83 38 d9 9f 35 61 75 c4 94 5e f5 cc cf a6 1b 7b 56 14 3c bb f4 26 dd d0 e0 fc 7c fe 8c 3c 23>

  // buffer from hex
  let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
  BITBOX.Crypto.hash256(buffer)
  // <Buffer 7a d2 a7 4b d5 96 98 71 4a 29 91 a8 2b 71 73 6f 35 42 b2 82 8b 6a c2 4d e4 27 c4 40 da 89 d0 1a>

  // buffer from hex
  let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
  BITBOX.Crypto.hash256(buffer)
  // <Buffer 68 8f 1d 02 9e d5 4c 34 d0 32 0b 83 8b f6 fc 64 f6 2f 38 a6 e9 30 a0 af 5b db 4e 27 d1 a6 84 cd>
            `}</SyntaxHighlighter>

            <h3 id='hash160'><code>hash160</code></h3>
            <p>
  Utility for creating ripemd160(sha256()) hash digests of data
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  buffer  <code>Buffer</code>:          data to be hashed
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            buffer <code>Buffer</code>:     ripemd160(sha256()) hash of data
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // buffer from hex
  let buffer = Buffer.from('0101010101010101', 'hex')
  BITBOX.Crypto.hash160(buffer)
  // <Buffer ab af 11 19 f8 3e 38 42 10 fe 8e 22 2e ac 76 e2 f0 da 39 dc>

  // buffer from hex
  let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
  BITBOX.Crypto.hash160(buffer)
  // <Buffer 88 74 ef 88 8a 9b cb d8 3b 87 d0 6f f7 bc 21 3c 51 49 73 62>

  // buffer from hex
  let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
  BITBOX.Crypto.hash160(buffer)
  // <Buffer 5f 95 6a 88 86 30 51 ea 52 15 d8 97 0c ed 8e 21 8e b6 15 cf>
            `}</SyntaxHighlighter>

            <h3 id='randomBytes'><code>randomBytes</code></h3>
            <p>
  Generates cryptographically strong pseudo-random data. The size argument is a number indicating the number of bytes to generate.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
  numBytes <code>number</code>:          number of bytes to generate
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            buffer <code>Buffer</code>:     random bytes encoded as a buffer
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  BITBOX.Crypto.randomBytes(16)
  // <Buffer 8c 5e 76 62 2f 4c bf cc 07 db b2 4f ea ea 1e d6>

  BITBOX.Crypto.randomBytes(20)
  // <Buffer c5 87 45 a4 13 33 04 8d f8 a5 13 da 80 16 8b 08 e6 d1 98 d7>

  BITBOX.Crypto.randomBytes(24)
  // <Buffer 69 0a a3 84 b9 af 85 56 19 d5 b0 8b 11 92 09 e2 81 ea aa 8f 75 77 57 a6>

  BITBOX.Crypto.randomBytes(28)
  // <Buffer 3f ca d9 b1 86 ff f9 5d da d5 5f ce 63 ce af 45 6b 4f 61 91 c7 63 e2 a2 bf 2a 9e c7>

  BITBOX.Crypto.randomBytes(32)
  // <Buffer d7 6e e8 f2 34 bd 4a 42 27 72 14 34 13 27 85 c2 9e 54 42 68 63 9c eb 7e a3 a8 68 e8 35 33 f7 a0>
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Crypto;
