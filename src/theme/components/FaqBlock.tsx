import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import { connect } from 'react-redux';


interface props {
  onLeftMenu?(): void;
  faqList?:any
}

class FaqBlock extends React.Component<props, any> {

  constructor(props) {
    super(props);
    this.state = {
      SelectedFaq: ''
    }
  }

  toggle(toggle) {
    console.log("clucked ")
    this.setState({ SelectedFaq: this.state.SelectedFaq == toggle ? "" : toggle })
  };

  render(): any {
    return (
      <section>
        <div className="faq">
          <div className="faq_main">
            <div className="widget_title"> FREQUENTLY ASKED QUESTIONS </div>
            <div className="product-role-small_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</div>
            <div className="accordion_block">

            {this.props.faqList.map((singleFaq,index)=>{
              return <React.Fragment>
                <button className={this.state.SelectedFaq == (index+1) ?"accordion closeAccordion":"accordion"}
                  onClick={() => this.toggle(index+1)}
                >{singleFaq.title}</button>

                  <div className={this.state.SelectedFaq == (index+1) ? "testimonialsContentBlock slidedownForFaq":"testimonialsContentBlock slideup"}>
                    {singleFaq.content.map(singleListItem =>{
                      return <div className="singleFaqSubItem">
                        <div className="singleFaqSubItemTitle">{singleListItem.singleFaqTitle}</div>
                        <div className="singleFaqSubItemContent">{ReactHtmlParser(singleListItem.singleFaqContent)}</div>
                      </div>
                    })}
                  </div>
              </React.Fragment>
            })}

            </div>
            <div className="show-more">
              <a target="_blank" href="https://byndr.zendesk.com/">Show more</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const map = (state: any) => {
  return {
    ...state.MainReducer
  };
};

export default connect(
  map,
  null,
)(FaqBlock);