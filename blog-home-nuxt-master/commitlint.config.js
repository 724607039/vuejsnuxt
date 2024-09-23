module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'config',
        'chore',
        'bulid',
        'ci',
        'Chores'
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case:': [0, 'never'],

  },
}
