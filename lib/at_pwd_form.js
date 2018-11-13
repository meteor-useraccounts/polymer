// Simply 'inherites' helpers from AccountsTemplates
Template.atPwdForm.helpers(AccountsTemplates.atPwdFormHelpers);

// Simply 'inherites' events from AccountsTemplates
Template.atPwdForm.events(AccountsTemplates.atPwdFormEvents);

// Use the polymer button to submit the form, it can't trigger submit events
pwdFormSubmit = AccountsTemplates.atPwdFormEvents["submit #at-pwd-form"]

Template.atPwdForm.events({
  "click .at-btn.submit": pwdFormSubmit,
});
