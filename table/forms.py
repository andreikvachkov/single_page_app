from django import forms

class FilterTable(forms.Form):
    choice = forms.ChoiceField(widget=forms.Select(attrs={
        "placeholder": 'Выбор колонки',
        "class": 'form-control'}), choices=[
        ["1", "Название"],
        ["2", "Количество"],
        ["3", "Расстояние"]
    ])
    criterion = forms.ChoiceField(widget=forms.Select( attrs={
        "placeholder": 'Выбор условия',
        "class": 'form-control'}), choices=[
        ["=", "Равно"],
        ["+=", "Содержит"],
        [">", "Больше"],
        ["<", "Меньше"]
    ])
    choice_text = forms.CharField(widget=forms.TextInput(attrs={
        "placeholder": 'Текст сортировки',
        "class": 'form-control',
        "type": 'text',
        "id": 'myInput',
        "onkeyup": "myFunction()",}))