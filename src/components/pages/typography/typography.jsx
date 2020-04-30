import React, {Component} from 'react';
import ContentWrap from "../../common/content-wrap";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import './typography.scss';
class TypographyPage extends Component {
    render() {
        return (
            <div className="typography-wrap">
                <Breadcrumb title={'Typography'}/>
                <ContentWrap isBoxed={true} isContentBox={true}>
                    <h2>Buttons</h2>
                    <p>
                        <button type="button" className="btn btn-primary m-1">Primary</button>
                        <button type="button" className="btn btn-secondary m-1">Secondary</button>
                        <button type="button" className="btn btn-success m-1">Success</button>
                        <button type="button" className="btn btn-danger m-1">Danger</button>
                        <button type="button" className="btn btn-warning m-1">Warning</button>
                        <button type="button" className="btn btn-info m-1">Info</button>
                        <button type="button" className="btn btn-light m-1">Light</button>
                        <button type="button" className="btn btn-dark m-1">Dark</button>
                        <button type="button" className="btn btn-link m-1">Link</button>
                    </p>
                    <p>
                        <button type="button" className="btn btn-outline-primary m-1">Primary</button>
                        <button type="button" className="btn btn-outline-secondary m-1">Secondary</button>
                        <button type="button" className="btn btn-outline-success m-1">Success</button>
                        <button type="button" className="btn btn-outline-danger m-1">Danger</button>
                        <button type="button" className="btn btn-outline-warning m-1">Warning</button>
                        <button type="button" className="btn btn-outline-info m-1">Info</button>
                        <button type="button" className="btn btn-outline-light m-1">Light</button>
                        <button type="button" className="btn btn-outline-dark m-1">Dark</button>
                    </p>

                    <h2>Form</h2>
                    <div className={`row`}>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="text-uppercase" htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email
                                    with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label className="text-uppercase" htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>

                    <div className="entry-content mt-5">
                        <h1>Header one</h1>
                        <h2>Header two</h2>
                        <h3>Header three</h3>
                        <h4>Header four</h4>
                        <h5>Header five</h5>
                        <h6>Header six</h6>
                        <h2 className="mt-5">Blockquotes</h2>
                        <p>Single line blockquote:</p>
                        <blockquote><p>Stay hungry. Stay foolish.</p></blockquote>
                        <p>Multi line blockquote with a cite reference:</p>
                        <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
                            <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
                                Quotation Element</em>) indicates that the enclosed text is an extended quotation.
                                Usually, this is rendered visually by indentation
                                (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a>
                                for
                                how to change it). A URL for the source of the quotation may be given using
                                the <strong>cite</strong> attribute, while a text representation of the source can
                                be given using
                                the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"
                                       title="The HTML Citation Element <cite> represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata."><code>&lt;
                                    cite&gt;</code></a> element.
                            </p>
                        </blockquote>
                        <p><cite>multiple contributors</cite> – MDN HTML element reference – blockquote</p>
                        <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        <h2 className="mt-5">Tables</h2>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th><a href="http://example.org/">John Doe</a></th>
                                <td>$1</td>
                                <td>Because that’s all Steve Jobs needed for a salary.</td>
                            </tr>
                            <tr>
                                <th><a href="http://example.org/">Jane Doe</a></th>
                                <td>$100K</td>
                                <td>For all the blogging she does.</td>
                            </tr>
                            <tr>
                                <th><a href="http://example.org/">Fred Bloggs</a></th>
                                <td>$100M</td>
                                <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
                            </tr>
                            <tr>
                                <th><a href="http://example.org/">Jane Bloggs</a></th>
                                <td>$100B</td>
                                <td>With hair like that?! Enough said…</td>
                            </tr>
                            </tbody>
                        </table>
                        <h2 className="mt-5">Definition Lists</h2>
                        <dl>
                            <dt>Definition List Title</dt>
                            <dd>Definition list division.</dd>
                            <dt>Startup</dt>
                            <dd>A startup company or startup is a company or temporary organization designed to
                                search for a repeatable and scalable business model.
                            </dd>
                            <dt>#dowork</dt>
                            <dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins,
                                “Do Work” works as a self motivator, to motivating your friends.
                            </dd>
                            <dt>Do It Live</dt>
                            <dd>I’ll let Bill O’Reilly
                                will <a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a>
                                this
                                one.
                            </dd>
                        </dl>
                        <h2 className="mt-5">Unordered Lists (Nested)</h2>
                        <ul>
                            <li>List item one
                                <ul>
                                    <li>List item one
                                        <ul>
                                            <li>List item one</li>
                                            <li>List item two</li>
                                            <li>List item three</li>
                                            <li>List item four</li>
                                        </ul>
                                    </li>
                                    <li>List item two</li>
                                    <li>List item three</li>
                                    <li>List item four</li>
                                </ul>
                            </li>
                            <li>List item two</li>
                            <li>List item three</li>
                            <li>List item four</li>
                        </ul>
                        <h2 className="mt-5">Ordered List (Nested)</h2>
                        <ol start="8">
                            <li>List item one -start at 8
                                <ol>
                                    <li>List item one
                                        <ol reversed="reversed">
                                            <li>List item one -reversed attribute</li>
                                            <li>List item two</li>
                                            <li>List item three</li>
                                            <li>List item four</li>
                                        </ol>
                                    </li>
                                    <li>List item two</li>
                                    <li>List item three</li>
                                    <li>List item four</li>
                                </ol>
                            </li>
                            <li>List item two</li>
                            <li>List item three</li>
                            <li>List item four</li>
                        </ol>
                        <h2 className="mt-5">HTML Tags</h2>
                        <p>These supported tags come from the WordPress.com
                            code <a title="Code" href="https://en.support.wordpress.com/code/">FAQ</a>.</p>
                        <p><strong>Address Tag</strong></p>
                        <address>1 Infinite Loop<br/>
                            Cupertino, CA 95014<br/>
                            United States
                        </address>
                        <p><strong>Anchor Tag (aka. Link)</strong></p>
                        <p>This is an example of
                            a <a title="WordPress Foundation" href="https://wordpressfoundation.org/">link</a>.</p>
                        <p><strong>Abbreviation Tag</strong></p>
                        <p>The abbreviation <abbr title="Seriously">srsly</abbr> stands for “seriously”.</p>
                        <p><strong>Acronym Tag (<em>deprecated in HTML5</em>)</strong></p>
                        <p>The acronym <acronym title="For The Win">ftw</acronym> stands for “for the win”.</p>
                        <p><strong>Big Tag</strong> (<em>deprecated in HTML5</em>)</p>
                        <p>These tests are a <big>big</big> deal, but this tag is no longer supported in HTML5.</p>
                        <p><strong>Cite Tag</strong></p>
                        <p>“Code is poetry.” —<cite>Automattic</cite></p>
                        <p><strong>Code Tag</strong></p>
                        <p>This tag styles blocks of code.<br/>
                            You will learn later on in these tests that <code>word-wrap: break-word;</code> will
                            be your best friend.</p>
                        <p><strong>Delete Tag</strong></p>
                        <p>This tag will let you
                            <del cite="deleted it">strike out text</del>
                            , but this tag
                            is <em>recommended</em> supported in HTML5 (use
                            the <code>&lt;s&gt;</code> instead).
                        </p>
                        <p><strong>Emphasize Tag</strong></p>
                        <p>The emphasize tag should <em>italicize</em> <i>text</i>.</p>
                        <p><strong>Horizontal Rule Tag</strong></p>
                        <hr/>
                        <p>This sentence is following a <code>&lt;hr /&gt;</code> tag.</p>
                        <p><strong>Insert Tag</strong></p>
                        <p>This tag should denote
                            <ins cite="inserted it">inserted</ins>
                            text.
                        </p>
                        <p><strong>Keyboard Tag</strong></p>
                        <p>This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually
                            styled like the <code>&lt;code&gt;</code> tag.</p>
                        <p><strong>Preformatted Tag</strong></p>
                        <p>This tag is for preserving whitespace as typed, such as in poetry or ASCII
                            art.</p>
                        <h2 className="mt-5">The Road Not Taken</h2>
                        <pre><cite>Robert Frost</cite>

  Two roads diverged in a yellow wood,
  And sorry I could not travel both          (\_/)
  And be one traveler, long I stood         (='.'=)
  And looked down one as far as I could     (")_(")
  To where it bent in the undergrowth;

  Then took the other, as just as fair,
  And having perhaps the better claim,          |\_/|
  Because it was grassy and wanted wear;       / @ @ \
  Though as for that the passing there        ( &gt; º &lt; )
  Had worn them really about the same,         `&gt;&gt;x&lt; &lt;´
                                               /  O  \
  And both that morning equally lay
  In leaves no step had trodden black.
  Oh, I kept the first for another day!
  Yet knowing how way leads on to way,
  I doubted if I should ever come back.

  I shall be telling this with a sigh
  Somewhere ages and ages hence:
  Two roads diverged in a wood, and I—
  I took the one less traveled by,
  And that has made all the difference.


  and here's a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;
</pre>
                        <p><strong>Quote Tag</strong> for short, inline quotes</p>
                        <p><q>Developers, developers, developers...</q> --Steve Ballmer</p>
                        <p><strong>Strike Tag</strong> (<em>deprecated in HTML5</em>) and <strong>S
                            Tag</strong></p>
                        <p>This tag shows <strike>strike-through</strike> <s>text</s>.</p>
                        <p><strong>Small Tag</strong></p>
                        <p>This tag shows
                            <small>smaller
                                <small> text.</small>
                            </small>
                        </p>
                        <p><strong>Strong Tag</strong></p>
                        <p>This tag shows <strong>bold<strong> text.</strong></strong></p>
                        <p><strong>Subscript Tag</strong></p>
                        <p>Getting our science styling on with H<sub>2</sub>O, which should push the "2"
                            down.</p>
                        <p><strong>Superscript Tag</strong></p>
                        <p>Still sticking with science and Albert Einstein's E = MC<sup>2</sup>, which
                            should lift the 2 up.</p>
                        <p><strong>Teletype Tag </strong>(<em>obsolete in HTML5</em>)</p>
                        <p>This rarely used tag emulates <tt>teletype text</tt>, which is usually styled
                            like the <code>&lt;code&gt;</code> tag.</p>
                        <p><strong>Underline Tag</strong> <em>deprecated in HTML 4, re-introduced in
                            HTML5 with other semantics</em></p>
                        <p>This tag shows <u>underlined text</u>.</p>
                        <p><strong>Variable Tag</strong></p>
                        <p>This allows you to denote <var>variables</var>.</p>

                    </div>
                </ContentWrap>
            </div>
        )
    }
}

export default TypographyPage