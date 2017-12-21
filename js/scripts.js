var today = new Date();
var now = today.getHours();
var greeting = document.getElementById("greeting");
var message;

if ( now < 12 ){
  message = 'Whether tea or coffee, a cup will keep you warm and alert! Stewart ilondanga says Good Morning';
} else if ( now < 18 ) {
  message = 'An apple a day keeps the doctor away! Stewart ilondanga says Good Afternoon';
} else if ( now < 21 ){
  message = 'Enjoying the review! Stewart ilondanga says Good Evening';
} else {
  message = 'Preparing for tommorrow? Stewart ilondanga says Good night!';
}

greeting.innerHTML = message;

$(document).ready(function(){

	$("nav a").on("click", function(event){
		event.preventDefault();
		$("nav").addClass("fixed");
		id = ($(this).attr("href"));
		scrollVertical = $(id).offset().top;

		$("body, html").animate({scrollTop: scrollVertical});
	});

	$(document).on("scroll", function(){
		secondPage = $("nav li:nth-child(2) a").attr("href");

		if ( $("body").scrollTop() >= $("nav").height() )
		{
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
	});

});

var NameInput = React.createClass({displayName: "NameInput",
    handleTextChange: function(){
        var x = this.refs.nameField.getDOMNode().value;

        if(x != ''){
            this.refs.nameField.getDOMNode().className = 'active';
        } else {
            this.refs.nameField.getDOMNode().className = '';
        }

        this.props.onUserInput(x);
    },
    render: function(){
        return (
            React.createElement("div", {className: "control"},
                React.createElement("input", {type: "text", id: "name", ref: "nameField", placeholder: "What should I call you?", autoFocus: true, required: true, onChange: this.handleTextChange}),
                React.createElement("label", {for: "name"}, "Name")
            )
        )
    }
});

var EmailInput = React.createClass({displayName: "EmailInput",
    handleTextChange: function(){
        var x = this.refs.emailField.getDOMNode().value;

        if(x != ''){
            this.refs.emailField.getDOMNode().className = 'active';
        } else {
            this.refs.emailField.getDOMNode().className = '';
        }

        this.props.onUserInput('', x);
    },
    render: function(){
        return (
            React.createElement("div", {className: "control"},
                React.createElement("input", {type: "email", id: "email", ref: "emailField", placeholder: "Where can I reach you?", required: true, onChange: this.handleTextChange}),
                React.createElement("label", {for: "email"}, "e-mail")
            )
        )
    }
});

var MessageArea = React.createClass({displayName: "MessageArea",
    handleTextChange: function(){
        var x = this.refs.messageBox.getDOMNode().value;

        if(x != ''){
            this.refs.messageBox.getDOMNode().className = 'active';
        } else {
            this.refs.messageBox.getDOMNode().className = '';
        }

        this.props.onUserInput('', '', x);
    },
    render: function(){
        return (
            React.createElement("div", {className: "control"},
                React.createElement("textarea", {id: "message", ref: "messageBox", placeholder: "What's on your mind?", required: true, onChange: this.handleTextChange}),
                React.createElement("label", {for: "message"}, "Message")
            )
        )
    }
});

var ContactForm = React.createClass({displayName: "ContactForm",
    getInitialState: function() {
        return {
            nameText: '',
            emailText: '',
            messageText: ''
        };
    },
    handleUserInput: function(nameText, emailText, messageText) {
        this.setState({
            nameText: nameText,
            emailText: emailText,
            messageText: messageText
        });
    },
  render: function(){
    return (
         React.createElement("form", {action: "/"},

            React.createElement("fieldset", null,
                React.createElement("legend", null, "Contact me."),

                React.createElement(NameInput, {onUserInput: this.handleUserInput}),
                React.createElement(EmailInput, {onUserInput: this.handleUserInput}),
                React.createElement(MessageArea, {onUserInput: this.handleUserInput}),

                React.createElement("input", {type: "submit", value: "send"})
            )

        )
        );
  }
});

React.render(React.createElement(ContactForm, null), document.getElementById('stage'));
