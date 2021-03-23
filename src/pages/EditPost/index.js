import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../../components/Input';
import { usePost } from '../../hooks/posts';

import { Container } from './styles';

export default function EditPost(data) {
  const { createPost } = usePost();
  const formRef = useRef(null);
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const selectedPost = data.location.state && data.location.state.params;

  useEffect(() => {
    if (selectedPost) {
      formRef.current.setData({
        title: selectedPost.title,
        description: selectedPost.body,
      });
    }
  }, [selectedPost]);

  const handleSubmit = useCallback(
    async dataForm => {
      if (loader) return;

      setLoader(true);

      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Required field'),
          description: Yup.string().required('Required field'),
        });

        await schema.validate(dataForm, {
          abortEarly: false,
        });

        const create = createPost(data);

        setLoader(false);
        console.log(create);
      } catch (err) {
        const validationErrors = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        } else {
          const { error } = err.response.data;
          console.error(error);
        }

        setLoader(false);
      }
    },
    [loader],
  );

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <Input name="title" label="Title" Icon="string" placeholder="Title" />

      <Input
        name="description"
        label="Description"
        Icon="string"
        placeholder="Description"
      />

      <button disabled={loader} type="submit" className="edit-button">
        {loader ? 'Saving...' : 'Save'}
      </button>

      <button
        type="button"
        className="delete-button"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
    </Container>
  );
}
