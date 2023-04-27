import { Checkbox, Input, Radio, Select, Space, Col, Row } from 'antd';
export default ({ categoryId, ques, LUNG, templateInfo }) => {
  const handleOnChangeCheckbox = (categoryId, choiceId, checked) => {
    console.log(templateInfo);

    templateInfo.answer[choiceId] = checked;
    console.log(LUNG.generalInfo[categoryId]);
  };
  const handleOnChangeText = (categoryId, value, otherValue = false) => {
    if (otherValue) {
      templateInfo.otherValue = value;
    } else templateInfo.answer = value;
  };
  const handleOnChangeRadio = (categoryId, value) => {
    templateInfo.answer = value;
  };
  if (ques.type === 'checkbox') {
    return (
      <>
        {ques?.listChoice?.map((choice, choiceId) => {
          if (choice.includes('Khác (ghi rõ):'))
            return (
              <div key={choiceId} className="sub-cell">
                <Checkbox
                  defaultChecked={ques.answer[choiceId]}
                  onChange={(e) => {
                    handleOnChangeCheckbox(categoryId, choiceId, e.target.checked);
                  }}
                >
                  {choice}
                </Checkbox>{' '}
                <Input.TextArea
                  autoSize={true}
                  defaultValue={ques?.otherValue}
                  onChange={(e) => handleOnChangeText(categoryId, e.target.value, true)}
                />
              </div>
            );
          return (
            <div style={{ height: '48px' }} className="sub-cell" key={choiceId}>
              <Checkbox
                defaultChecked={ques.answer[choiceId]}
                onChange={(e) => {
                  handleOnChangeCheckbox(categoryId, choiceId, e.target.checked);
                }}
              >
                {choice}
              </Checkbox>
            </div>
          );
        })}
      </>
    );
  }
  if (ques.type === 'text') {

    return (
      <>
        <Input
          className="input"
          onChange={(e) => {
            handleOnChangeText(categoryId, e.target.value);
          }}
          suffix={ques?.unit}
          prefix={ques?.prefix}
        ></Input>
      </>
    );
  }
  if (ques.type === 'textarea') {
    return (
      <>
        <Input.TextArea
          style={{ width: '100%' }}
          onChange={(e) => {
            handleOnChangeText(categoryId, e.target.value);
          }}
          suffix={ques?.unit}
        ></Input.TextArea>
      </>
    );
  }
  if (ques.type === 'none') {
    return (
      <div style={{ height: '48px' }} className="sub-cell">
        {ques.question}
      </div>
    );
  }
  if (ques.type === 'title') {
    return <div>{ques.question}</div>;
  }
  if (ques.type === 'radio') {
    return (
      <Radio.Group
        onChange={(e) => {
          handleOnChangeRadio(categoryId, e.target.value);
        }}
        defaultValue={ques?.answer}
      >
        <Space direction={ques?.horizontal ? 'horizontal' : 'vertical'}>
          {ques?.listChoice?.map((choice, choiceId) => {
            return (
              <Radio value={choice} key={choiceId}>
                {choice}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    );
  }
  if (ques.type === 'date') {
    return (
      <Input
        type="date"
        onChange={(e) => {
          handleOnChangeText(categoryId, e.target.value);
        }}
        suffix={ques?.unit}
        prefix={
          ques?.prefix
        }
      ></Input>
    );
  }
  if (ques.type === 'select') {
    return (
      <Select
        style={{ width: '100%' }}
        options={ques.listChoice.map((choice) => ({ label: choice, value: choice }))}
      />
    );
  }
  if (ques.type === 'table') {
    return <table>
      <thead>
        <tr>  {ques.header.map((title, titleId) => {
          return <th key={titleId}>
            {title}
          </th>
        })}</tr>
      </thead>
      <tbody>
        {/* {ques.body.map((body))} */}
      </tbody>
    </table>
  }
};
