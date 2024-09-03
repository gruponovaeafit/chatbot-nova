import unittest
import model.nova_bot as NB


class Test_Contexts(unittest.TestCase):
    def test_question1(self):
        self.assertEqual(NB.get_index("que es nova?"), 0)

    def test_question2(self):
        self.assertEqual(NB.get_index("que hace nova?"), 0)

    def test_question3(self):
        self.assertEqual(NB.get_index("que departamentos tiene nova?"), 0)

    def test_question4(self):
        self.assertEqual(NB.get_index("que hace RRPP?"), 1)

    def test_question5(self):
        self.assertEqual(NB.get_index("que hace Mercadeo"), 2)

    def test_question6(self):
        self.assertEqual(NB.get_index("que hace GH?"), 3)

    def test_question7(self):
        self.assertEqual(NB.get_index("que hace communities?"), 4)

    def test_question8(self):
        self.assertEqual(NB.get_index("cuantos macroeventos tiene nova?"), 5)

    def test_question9(self):
        self.assertEqual(NB.get_index(
            "cuales son los macroeventos de nova?"), 5)

    def test_question10(self):
        self.assertEqual(NB.get_index("que son las novatalks?"), 6)

    def test_question11(self):
        self.assertEqual(NB.get_index("cuantas alianzas tiene nova?"), 7)

    def test_question12(self):
        self.assertEqual(NB.get_index("cuales son las alianzas de nova?"), 7)

    def test_question13(self):
        self.assertEqual(NB.get_index(
            "cual es el objetivo de communities?"), 4)

    def test_question14(self):
        self.assertEqual(NB.get_index("donde esta nova?"), 0)

    def test_question15(self):
        self.assertEqual(NB.get_index("de que se encarga RRPP?"), 1)


if __name__ == "__main__":
    unittest.main()
