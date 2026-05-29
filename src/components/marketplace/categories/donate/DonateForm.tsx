import { useState } from "react";
import styled from "styled-components";
import { FiArrowRight, FiCamera, FiGift, FiInfo } from "react-icons/fi";

const categories = [
  "Baby clothes",
  "Strollers",
  "Car seats",
  "Baby carriers",
  "Nursing & feeding",
  "Breast pumps",
  "Toys & books",
  "Bassinets & cribs",
  "Pregnancy essentials",
  "Postpartum recovery",
  "Baby gear",
  "Nursery items",
  "Other",
];

const clothingSizes = [
  "Newborn / 50",
  "56",
  "62",
  "68",
  "74",
  "80",
  "86",
  "92+",
];

export default function DonateForm() {
  const [category, setCategory] = useState("");
  const isClothing = category === "Baby clothes";

  return (
    <Section>
      <Shell>
        <Intro>
          <IconBubble>
            <FiGift />
          </IconBubble>

          <SmallTitle>Donate an item</SmallTitle>

          <Title>
            Create a donation
            <span>listing.</span>
          </Title>

          <IntroText>
            Add clear details so another mom can quickly understand what you are
            giving away and arrange pickup with confidence.
          </IntroText>

          <TipBox>
            <FiInfo />
            <p>
              Tip: good photos, size, condition and pickup area help your item
              find a new family faster.
            </p>
          </TipBox>
        </Intro>

        <FormCard>
          <Form>
            <FieldGroup>
              <Label>Item title</Label>
              <input placeholder="Example: Newborn clothes bundle" />
            </FieldGroup>

            <Row>
              <FieldGroup>
                <Label>Category</Label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </FieldGroup>

              {isClothing ? (
                <FieldGroup>
                  <Label>Clothing size</Label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select size
                    </option>
                    {clothingSizes.map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </FieldGroup>
              ) : (
                <FieldGroup>
                  <Label>Item type / model</Label>
                  <input placeholder="Example: stroller, car seat, baby carrier..." />
                </FieldGroup>
              )}
            </Row>

            <Row>
              <FieldGroup>
                <Label>Condition</Label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select condition
                  </option>
                  <option>Like new</option>
                  <option>Good condition</option>
                  <option>Used but loved</option>
                  <option>Needs a little care</option>
                </select>
              </FieldGroup>

              <FieldGroup>
                <Label>Pickup area</Label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select area
                  </option>
                  <option>Trondheim sentrum</option>
                  <option>Lade</option>
                  <option>Solsiden</option>
                  <option>Øya</option>
                  <option>Bakklandet</option>
                  <option>Byåsen</option>
                  <option>Moholt</option>
                  <option>Heimdal</option>
                  <option>Other area</option>
                </select>
              </FieldGroup>
            </Row>

            <FieldGroup>
              <Label>Description</Label>
              <textarea placeholder="Describe the item, condition, pickup details and anything useful for another mom..." />
            </FieldGroup>

            <UploadBox>
              <FiCamera />
              <strong>Upload photos</strong>
              <span>Recommended: 1–5 clear images</span>
            </UploadBox>

            <Button type="button">
              Publish donation <FiArrowRight />
            </Button>
          </Form>
        </FormCard>
      </Shell>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  padding: 8rem 1.5rem 9rem;
  background: radial-gradient(
      circle at 22% 20%,
      rgba(242, 140, 140, 0.1),
      transparent 32%
    ),
    rgba(255, 248, 241, 0.5);
`;

const Shell = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 1.4rem;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Intro = styled.aside`
  padding: 2rem;
  border-radius: 42px;
  background: rgba(255, 255, 255, 0.52);
  border: 3px solid rgba(221, 127, 127, 0.14);
  box-shadow: 0 34px 100px rgba(74, 54, 44, 0.08);
`;

const IconBubble = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #f28c8c;
  background: rgba(242, 140, 140, 0.12);
  border: 1px solid rgba(242, 140, 140, 0.18);
`;

const SmallTitle = styled.p`
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: #a96f5f;
  font-size: 0.78rem;
  font-weight: 900;
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: clamp(2.7rem, 5vw, 4.8rem);
  line-height: 0.9;
  letter-spacing: -0.07em;
  color: #2d2622;

  span {
    display: block;
    color: #8d7663;
  }
`;

const IntroText = styled.p`
  margin-top: 1.4rem;
  color: #675d56;
  line-height: 1.8;
`;

const TipBox = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 24px;
  display: flex;
  gap: 0.8rem;
  background: rgba(255, 248, 241, 0.72);
  border: 1px solid rgba(242, 140, 140, 0.14);
  color: #7a6b5f;
  line-height: 1.6;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: #f28c8c;
  }
`;

const FormCard = styled.div`
  width: 100%;
  min-width: 0;

  padding: clamp(1.2rem, 3vw, 2rem);

  border-radius: 42px;

  background: rgba(255, 255, 255, 0.72);

  border: 2px solid rgba(177, 104, 104, 0.16);

  box-shadow: 0 34px 100px rgba(74, 54, 44, 0.1);
`;

const Form = styled.form`
  width: 100%;
  min-width: 0;

  display: grid;
  gap: 1.1rem;

  * {
    box-sizing: border-box;
  }

  input,
  textarea,
  select {
    width: 100%;
    min-width: 0;

    border: 1px solid rgba(242, 140, 140, 0.18);
    border-radius: 24px;

    padding: 1rem 1.1rem;

    background: rgba(255, 250, 246, 0.72);

    color: #4a3b33;

    outline: none;

    font: inherit;

    transition: border-color 0.25s ease, box-shadow 0.25s ease,
      background 0.25s ease;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: rgba(242, 140, 140, 0.42);

    background: rgba(255, 255, 255, 0.9);

    box-shadow: 0 0 0 4px rgba(242, 140, 140, 0.08);
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }
`;

const Row = styled.div`
  width: 100%;
  min-width: 0;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr);

  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const FieldGroup = styled.label`
  display: grid;
  gap: 0.55rem;
`;

const Label = styled.span`
  color: #8c6b5c;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

const UploadBox = styled.div`
  padding: 2rem;
  border-radius: 28px;
  border: 1px dashed rgba(242, 140, 140, 0.45);
  display: grid;
  place-items: center;
  gap: 0.35rem;
  text-align: center;
  background: rgba(255, 250, 246, 0.56);
  color: #b17870;

  svg {
    font-size: 1.5rem;
    color: #f28c8c;
    margin-bottom: 0.25rem;
  }

  strong {
    font-weight: 900;
  }

  span {
    color: #7a6b5f;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  width: fit-content;
  border: none;
  border-radius: 999px;
  padding: 1rem 1.7rem;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: linear-gradient(135deg, #ff9aa3, #e96f7c);
  color: white;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 22px 55px rgba(234, 127, 137, 0.28);
  transition: transform 0.35s ease, box-shadow 0.35s ease, gap 0.35s ease;

  &:hover {
    transform: translateY(-3px);
    gap: 0.8rem;
    box-shadow: 0 30px 70px rgba(234, 127, 137, 0.36);
  }
`;
