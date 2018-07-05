# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#


def compute(first_strand, second_strand):
    first_strand = validate_and_format_strand(first_strand)
    second_strand = validate_and_format_strand(second_strand)

    validate_strand_lengths(first_strand, second_strand)

    # quick equality check
    if first_strand == second_strand:
        return 0
    else:
        return calculate_hamming_value(first_strand, second_strand)


def calculate_hamming_value(first_strand, second_strand):
    hamming_value = 0

    for i in range(len(first_strand)):
        if not first_strand[i] == second_strand[i]:
            hamming_value = hamming_value + 1

    return hamming_value


# validation methods
def validate_and_format_strand(strand):
    if not isinstance(strand, str):
        raise ValueError('Invalid Strand Type')

    return strand.upper()


def validate_strand_lengths(first_strand, second_strand):
    if not len(first_strand) == len(second_strand):
        raise ValueError('Strands are Different Lengths')
