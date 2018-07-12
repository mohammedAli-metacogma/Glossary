import * as React from 'react';

export interface HelpProps {
    title: string;
    logo: string;
}

export default class HelpPage extends React.Component<HelpProps> {
    render() {
        return (
            <section className='ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500'>
                <img width='90' height='90' src={this.props.logo} alt={this.props.title} title={this.props.title} />
                <h1 className='ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary'>{this.props.title} Help Page</h1>
                <p>To create a glossary, click on the <strong>Create Glossary</strong> button. 
                The current document will be scanned for words that match the master glossary and
                the glossary for the document will be generated.</p>
                <p>To see what the glossary looks like, go to the <strong>Glossary</strong> tab.</p>
                <p>To append the glossary to your document, click on the <strong>Append Glossary</strong> button.</p>
            </section>
        );
    }
}