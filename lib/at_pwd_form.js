// Simply 'inherites' helpers from AccountsTemplates
Template.atPwdForm.helpers(AccountsTemplates.atPwdFormHelpers);

// Simply 'inherites' events from AccountsTemplates
Template.atPwdForm.events(AccountsTemplates.atPwdFormEvents);

// Fix password button not working on mobile
pwdFormSubmit = AccountsTemplates.atPwdFormEvents["submit #at-pwd-form"]

Template.atPwdForm.events({
  "click .at-btn.submit": pwdFormSubmit,
});
